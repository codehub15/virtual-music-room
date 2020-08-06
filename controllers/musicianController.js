const httpError = require("http-errors")
const User = require("../models/musicianSchema")
const nodemailer = require('nodemailer');


// get all users
exports.getUsers = async (req, res, next) => {
    try {
        const users = await User.find()
        res.json({
            success: true,
            users: users
        })
    } catch (err) {
        next(err)
    }
}

// get single user
exports.getUser = async (req, res, next) => {
    const {
        id
    } = req.params
    try {
        const user = await User.findById(id).populate("tracks").populate("owner")
        console.log("user:", user)
        if (!user) throw httpError(404)
        res.json({
            success: true,
            user: user
        })
    } catch (err) {
        next(err)
    }
}

exports.getCurrentUser = async (req, res, next) => {
    try {
        const user = await User.findByToken(req.header("x-auth"))

        if (!user) throw httpError(404)
        res.json({
            success: true,
            user: user
        })
    } catch (err) {
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
        // response
        res.header("x-auth", token).json({
            success: true,
            user: data
        })
    } catch (err) {
        next(err)
    }
}


// update an user
exports.putUser = async (req, res, next) => {
    const {
        id
    } = req.params
    const user = req.body
    try {
        const updateUser = await User.findByIdAndUpdate(id, user, {
            new: true
        })
        if (!updateUser) throw httpError(500)
        res.json({
            success: true,
            user: updateUser
        })
    } catch (err) {
        next(err)
    }
}


// upload profile image
exports.uploadProfileImg = async (req, res, next) => {
    const {
        id
    } = req.params
    const newValues = {
        profileImage: "/uploads/profile/" + req.file.filename,
    };

    try {
        const updateProfileImg = await User.update({
            _id: id
        }, newValues, {
            new: true
        })
        if (!updateProfileImg) throw httpError(500)
        res.json({
            success: true,
            user: updateProfileImg
        })
    } catch (err) {
        next(err)
    }
}


// delete a user
exports.deleteUser = async (req, res, next) => {
    const {
        id
    } = req.params
    try {
        const user = await User.findByIdAndDelete(id)
        user.save()
        if (!user) throw httpError(500)
        res.json({
            success: true,
            user: user
        })
    } catch (err) {
        next(err)
    }
}


// login
exports.login = async (req, res, next) => {
    const {
        email,
        password
    } = req.body

    try {
        const user = await User.findOne({
            email
        })
        const valid = await user.checkPassword(password)
        if (!valid) throw httpError(403)

        let token = user.generateAuthToken()
        const data = user.getPublicFields()

        res.header("x-auth", token).json({
            success: true,
            user: data
        })
    } catch (err) {
        next(err)
    }
}


// send support email
exports.sendSupportEmail = async (req, res, next) => {
    const data = req.body

    let transporter = nodemailer.createTransport({
        service: 'gmail',
        host: 'smtp.gmail.com',
        secure: false,
        auth: {
            user: process.env.SUPPORT_EMAIL,
            pass: process.env.SUPPORT_PW
        },
        tls: {
            rejectUnauthorized: false
        }
    });

    let mailOptions = {
        from: data.email,
        to: process.env.SUPPORT_EMAIL_RECEIVER,
        subject: data.subject,
        text: data.emailTxt
    };

    await transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });

    // response
    res.json({
        success: true
    })
}