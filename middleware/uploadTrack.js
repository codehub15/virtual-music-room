const multer = require("multer")

//here was hard coded to the local and the dirname works for anyone's computer 
const uploadPath = __dirname + "/../client/public/uploads/tracks/"

const upload = multer({
    dest: uploadPath
})

module.exports = upload.single(("file"))
