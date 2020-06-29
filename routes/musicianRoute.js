const Route = require("express").Router()
const imgMulter = require("../middleware/imgMulter")
const {
    getUsers,
    getUser,
    getCurrentUser,
    postUser,
    putUser,
    deleteUser,
    login,
    uploadProfileImg,
    sendSupportEmail
} = require("../controllers/musicianController")
const {
    validateInputs
} = require("../middleware/validator")
const auth = require("../middleware/authenticator")

Route.post("/:id/upload/", imgMulter, uploadProfileImg)
Route.post("/login", login)
Route.get("/currentUser", auth, getCurrentUser)
Route.get("/:id", auth, getUser)
Route.get("/", auth, getUsers)
Route.post("/", validateInputs(), postUser)
Route.put("/:id", auth, putUser)
Route.delete("/:id", auth, deleteUser)
Route.post("/support", sendSupportEmail)

module.exports = Route