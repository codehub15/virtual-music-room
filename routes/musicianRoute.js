const Route = require("express").Router()
const multer = require("multer")
const { getUsers, getUser, postUser, putUser, deleteUser, login,
    uploadProfileImg
} = require("../controllers/musicianController")
const { validateInputs } = require("../middleware/validator")
// const auth = require("../middleware/authenticator")
const isAdmin = require("../middleware/rolesAuth")
const User = require("../models/musicianSchema")

// multer -------------------------
const uploadPath = "/home/dci-l222/Class/Projects/virtual-music-room/client/public/uploads/"
const upload = multer({
    dest: uploadPath
})

// Route.post("/upload", upload.single("profile"), (req, res, next) => {
//     console.log(req.file)
//     res.send("Received file")
// })

Route.post("/upload", upload.single("profile"), (req, res, next) => {
    // exports.uploadProfileImg = (upload.single("profile"), (req, res, next) => {
    console.log(req.file)
    const updatedImg = req.file.originalname
    console.log(updatedProfileImg)
    const updatedImgType = req.file.mimetype
    // res.send("Received file")
    let newValues = {
        $set: {
            profileImgName: updatedImg,
            profileImgType: updatedImgType
        }
    };
    try {
        const updateProfileImg = User.findByIdAndUpdate(id, newValues, { new: true })
        console.log("newValues:", newValues)
        if (!updateProfileImg) throw httpError(500)
        res.json({ success: true, user: updateProfileImg })
    }
    catch (err) {
        next(err)
    }
})

Route.post("/login", login)
Route.get("/", getUsers)
Route.get("/:id", getUser)
// Route.get("/:id", auth, getUser)
Route.post("/", validateInputs(), postUser)
Route.put("/:id", putUser)
// Route.delete("/:id", auth, deleteUser)
Route.delete("/:id", deleteUser)
// Route.post("/upload", uploadProfileImg)

module.exports = Route
