const Route = require("express").Router()
const {
    getProjects,
    getProject,
    postProject,
    putProject, 
    deleteProject,
    postTrack,
} = require("../controllers/projectController")
const uploadTrack = require("../middleware/uploadTrack")
const auth = require("../middleware/authenticator")

Route.get("/", auth, getProjects)
Route.get("/:id", auth, getProject)
Route.post("/", auth, postProject)
Route.put("/:id", auth, putProject)
Route.post("/:id/upload", auth, uploadTrack, postTrack)
Route.delete("/:id", auth, deleteProject)

module.exports = Route