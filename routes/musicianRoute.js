const Route = require("express").Router()
    // const multer = require("multer")
const imgMulter = require("../middleware/imgMulter")
const {
    getUsers,
    getUser,
    postUser,
    putUser,
    deleteUser,
    login,
    uploadProfileImg
} = require("../controllers/musicianController")
const { validateInputs } = require("../middleware/validator")
    // const auth = require("../middleware/authenticator")


// move to the middleware
// multer -------------------------
// const uploadPath = "/home/dci-l222/Class/Projects/virtual-music-room/client/public/uploads/"
// const upload = multer({
//     dest: uploadPath
// })
// Route.post("/upload", upload.single("profile"), (req, res, next) => {
//     console.log(req.file)
//     res.send("Received file")
// })

Route.post("/:id/upload", imgMulter, uploadProfileImg)
    // Route.post("/upload/:id", imgMulter, uploadProfileImg)
Route.post("/login", login)
Route.get("/", getUsers)
Route.get("/:token", getUser)
Route.post("/", validateInputs(), postUser)
Route.put("/:id", putUser)
    // Route.delete("/:id", auth, deleteUser)
Route.delete("/:id", deleteUser)

module.exports = Route