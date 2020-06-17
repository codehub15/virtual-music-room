const multer = require("multer")

const uploadPath = __dirname + "/../client/public/uploads/profile"

const upload = multer({
    dest: uploadPath
})

const imgMulter = upload.single(("profile"))

module.exports = imgMulter