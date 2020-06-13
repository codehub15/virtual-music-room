const multer = require("multer")

//here was hard coded to the local and the dirname works for anyone's computer 
const uploadPath = __dirname + "/../client/public/uploads/"

const upload = multer({
    dest: uploadPath
})

const imgMulter = upload.single(("profile"), (req, res, next) => {
    console.log("Hi from multer")
    console.log(req.file)
})

module.exports = imgMulter;