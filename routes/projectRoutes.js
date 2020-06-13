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

Route.get("/", getProjects)
Route.get("/:id", getProject)
Route.post("/", postProject)
Route.put("/:id", putProject)
Route.post("/:id/upload", uploadTrack, postTrack)
Route.delete("/:id", deleteProject)

module.exports = Route