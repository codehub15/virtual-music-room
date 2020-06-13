const multer = require("multer")

const uploadPath = "/home/dci-l222/Class/Projects/virtual-music-room/client/public/uploads/"

const upload = multer({
    dest: uploadPath
})

const imgMulter = upload.single(("profile"), (req, res, next) => {
    console.log("Hi from multer")
    console.log(req.file)
})

module.exports = imgMulter;