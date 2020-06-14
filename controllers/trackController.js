const httpError = require("http-errors")
const Track = require("../models/trackSchema")

// get all Tracks
exports.getTracks = async (req, res, next) => {
    try {
        const tracks = await Track.find()
        res.json({
            success: true,
            tracks: tracks
        })
    } catch (err) {
        next(err)
    }
}

// get single track
exports.getTrack = async (req, res, next) => {
    const {
        id
    } = req.params
    try {
        const track = await Track.findById(id)
        if (!track) throw httpError(404)
        res.json({
            success: true,
            track: track
        })
    } catch (err) {
        next(err)
    }
}

// add new track
exports.postTrack = async (req, res, next) => {
    try {
        const track = new Track(req.body)
        await track.save()
        console.log("server track:", track)
        res.json({
            success: true,
            track: track
        })

    } catch (err) {
        next(err)
    }
}


// update a track
exports.putTrack = async (req, res, next) => {
    const {
        id
    } = req.params
    const track = req.body
    try {
        const updateTrack = await Track.findByIdAndUpdate(id, track, {
            new: true
        })
        if (!updateTrack) throw httpError(500)
        res.json({
            success: true,
            track: updateTrack
        })
    } catch (err) {
        next(err)
    }
}

// delete a track
exports.deleteTrack = async (req, res, next) => {
    const {
        id
    } = req.params
    try {
        const track = await Track.findByIdAndDelete(id)
        if (!track) throw httpError(500)
        res.json({
            success: true,
            track: track
        })
    } catch (err) {
        next(err)
    }
}