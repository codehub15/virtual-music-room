const Route = require("express").Router()
const { getUsers, getUser, postUser, putUser, deleteUser, login,
    uploadProfileImg
} = require("../controllers/musicianController")
const { validateInputs } = require("../middleware/validator")
const auth = require("../middleware/authenticator")
const isAdmin = require("../middleware/rolesAuth")

Route.post("/login", login)
Route.get("/", getUsers)
Route.get("/:id", getUser)
// Route.get("/:id", auth, getUser)
Route.post("/", validateInputs(), postUser)
Route.put("/:id", auth, putUser)
// Route.delete("/:id", auth, deleteUser)
Route.delete("/:id", deleteUser)

// Route.get("/:id", downloadProfileImg)
Route.post("/upload", uploadProfileImg)

module.exports = Route
