const httpError = require("http-errors")
const User = require("../models/musicianSchema")
// const jwt = require("jsonwebtoken")
// const fileUpload = require('express-fileupload')
const http = require('http')
const path = require("path")
const fs = require('fs');
// const formidable = require('formidable')
// const Busboy = require('busboy')
// const multer = require('multer')
// const express = require("express")
const Jimp = require('jimp');


// const app = express()
// app.use(fileUpload());

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


exports.uploadProfileImg = async (req, res, next) => {
    const data = req.body
    console.log("data:", data)
    const id = data.userId;
    // console.log("id:", id)

    console.log("req.files", req.files)

    const uploadPath = "/home/dci-l222/Class/Projects/virtual-music-room/client/public/uploads/"
    console.log("uploadPath:", uploadPath)

    let path = './uploads/'
    let newProfileImgName = path + data.imgName;
    let newProfileImgType = data.imgType;

    let newValues = {
        $set: {
            profileImgName: newProfileImgName,
            profileImgType: newProfileImgType
        }
    };

    var storeFile = uploadPath + data.imgName
    console.log("storeFile:", storeFile)


    // multer -------------------------
    // const storage = multer.diskStorage({
    //     destination: function (req, file, cb) {
    //         // cb(null, 'uploads/');
    //         cb(null, uploadPath);
    //     },
    //     filename: function (req, file, cb) {
    //         // cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    //         cb(null, data.imgName + '-' + Date.now() + path.extname(data.imgName));
    //     }
    // });


    // let upload = multer({ storage: storage, fileFilter: helpers.imageFilter }).single('profile');
    // upload(req, res, function (err) {
    //     if (req.fileValidationError) {
    //         return res.send(req.fileValidationError);
    //     }
    //     else if (!req.file) {
    //         return res.send('Please select an image to upload');
    //     }
    //     else if (err instanceof multer.MulterError) {
    //         return res.send(err);
    //     }
    //     else if (err) {
    //         return res.send(err);
    //     }
    // })
    // -------------------------------


    // app.use(function (req, res, ) {
    //     console.log("app - data:", data.imgName)
    //     res.download(uploadPath + data.imgName)
    // });


    // const image = await Jimp.read(profileImgName);
    // console.log("image:", Jimp.read(profileImgName))
    // res.download(uploadPath + data.imgName)

    try {
        const updateProfileImg = await User.findByIdAndUpdate(id, newValues, { new: true })
        console.log("newValues:", newValues)



        // await image.writeAsync(`${uploadPath + data.imgName}${Date.now()}_150x150.png`);

        // console.log("updateProfileImg img:", updateProfileImg.name)
        // if (!updateProfileImg) throw httpError(500)
        // res.json({ success: true, user: updateProfileImg })
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
        user.save()
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