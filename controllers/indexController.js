const path = require("path");

exports.indexController = (req, res, next) => {
    res.sendFile(path.resolve(__dirname, "../client", "build", "index.html"))
}