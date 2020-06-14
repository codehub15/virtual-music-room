const Route = require("express").Router()
const {
    getTracks,
    getTrack,
    postTrack,
    putTrack,
    deleteTrack
} = require("../controllers/trackController")

const auth = require("../middleware/authenticator")
const isAdmin = require("../middleware/rolesAuth")
const uploadTrack = require("../middleware/uploadTrack")

Route.get("/", getTracks)
Route.get("/:id", getTrack)
// Route.get("/", auth, isAdmin, getTracks)
// Route.get("/:id", auth, getTrack)
Route.post("/", uploadTrack, postTrack)
Route.put("/:id", auth, putTrack)
Route.delete("/:id", auth, deleteTrack)

module.exports = Route