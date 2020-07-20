const httpError = require("http-errors")
const Project = require("../models/projectSchema")
const Track = require("../models/trackSchema")
const User = require("../models/musicianSchema")

// get all
exports.getProjects = async (req, res, next) => {

    try {
        const projects = await Project.find()
        // const projects = await Project.find().populate("owner")
        // const projects = await Project.find().populate("track").populate("owner").execPopulate()
        res.json({ success: true, projects: projects })
    } catch (err) {
        next(err)
    }
}

// get single projects
exports.getProject = async (req, res, next) => {
    const { id } = req.params
    try {
        const project = await (await Project.findById(id).populate("tracks").populate("owner")).execPopulate()
        if (!project) throw httpError(404)
        res.json({ success: true, project: project })
    } catch (err) {
        next(err)
    }
}

// add new project
exports.postProject = async (req, res, next) => {
    const token = req.header("x-auth")
    const user = await User.findByToken(token)
    try {
        const project = new Project(req.body)
        project.owner = user._id
        await project.save()
        res.json({ success: true, project: project })
    } catch (err) {
        next(err)
    }
}

// update a project
exports.putProject = async (req, res, next) => {
    const { id } = req.params
    const project = req.body
    try {
        const updateProject = await Project.findByIdAndUpdate(id, project, { new: true })
        if (!updateProject) throw httpError(500)
        res.json({ success: true, project: updateProject })
    } catch (err) {
        next(err)
    }
}

// delete a project
exports.deleteProject = async (req, res, next) => {
    const { id } = req.params
    try {
        const project = await Project.findByIdAndDelete(id)
        project.save()
        if (!project) throw httpError(500)
        res.json({ success: true, project: project })
    } catch (err) {
        next(err)
    }
}

exports.postTrack = async (req, res, next) => {
    const user = await User.findByToken(req.header("x-auth"))
    const track = new Track({
        trackName: req.file.originalname,
        path: req.file.filename,
        mimetype: req.file.mimetype,
        owner: user._id

    });

    await track.save()
    await User.findByIdAndUpdate(
        user._id, {
        $push: {
            tracks: track._id
        }
    }, {
        new: true,
        useFindAndModify: false
    }
    );
    await Project.findByIdAndUpdate(
        req.params.id, { $push: { tracks: track._id } }, { new: true, useFindAndModify: false }
    );
}