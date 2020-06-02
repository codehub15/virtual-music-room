const httpError = require("http-errors")
const User = require("../models/musicianSchema")
const jwt = require("jsonwebtoken")


// get all users
exports.getUsers = async (req, res, next) => {
    try {
        const users = await User.find()
        res.json({ success: true, users: users })
    }
    catch (err) {
        next(err)
    }
}

// get single user
exports.getUser = async (req, res, next) => {
    const { id } = req.params
    try {
        const user = await User.findById(id)
        if (!user) throw httpError(404)
        res.json({ success: true, user: user })
    }
    catch (err) {
        next(err)
    }
}

// add new user
exports.postUser = async (req, res, next) => {
    try {
        const user = new User(req.body)
        const token = user.generateAuthToken()
        await user.save()
        const data = user.getPublicFields()

        console.log("server user:", user)
        // setup session
        // req.session.token = token;
        // req.session.user = user;
        // res.cookie("login", true)
        // res.json({ success: true, user: data, token: token })

        // response
        res.header("x-auth", token).json({ success: true, user: data })
        // res.cookie("x-auth", token, { secure: true }).json({ success: true, user: data }

    }
    catch (err) {
        next(err)
    }
}


// update an user
exports.putUser = async (req, res, next) => {
    const { id } = req.params
    const user = req.body
    try {
        const updateUser = await User.findByIdAndUpdate(id, user, { new: true })
        if (!updateUser) throw httpError(500)
        res.json({ success: true, user: updateUser })
    }
    catch (err) {
        next(err)
    }
}

// delete a user
exports.deleteUser = async (req, res, next) => {
    const { id } = req.params
    try {
        const user = await User.findByIdAndDelete(id)
        if (!user) throw httpError(500)
        res.json({ success: true, user: user })
    }
    catch (err) {
        next(err)
    }
}


// login
exports.login = async (req, res, next) => {
    const { email, password } = req.body

    try {
        const user = await User.findOne({ email })
        const valid = await user.checkPassword(password)
        if (!valid) throw httpError(403)

        let token = user.generateAuthToken()
        const data = user.getPublicFields()

        // req.session.token = token;
        // req.session.user = user;

        res.header("x-auth", token).json({ success: true, user: data })
        // res.json({ success: true, user: data, token: token })
        // res.cookie("x-auth", token).json({ success: true, user: data })
        // res.json({ success: true, user: data, token: token })
    }
    catch (err) {
        next(err)
    }
}