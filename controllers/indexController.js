const path = require("path");

exports.indexController = (req, res, next) => {
    console.log("index path:", (__dirname, "../client", "build", "index.html"))
    res.sendFile(path.resolve(__dirname, "../client", "build", "index.html"))
}