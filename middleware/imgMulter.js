const multer = require("multer")

//here was hard coded to the local and the dirname works for anyone's computer 
const uploadPath = __dirname + "/../client/public/uploads/profile"

const upload = multer({
    dest: uploadPath
})

const imgMulter = upload.single(("profile"))

module.exports = imgMulter