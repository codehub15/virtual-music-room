const User = require("../models/musicianSchema")
const httpError = require("http-errors")


const auth = async (req, res, next) => {
    const token = req.header("x-auth")
    // const token = req.cookies["x-auth"]
    // console.log("req.cookies:", req.cookies)
    // const token = req.session.token;
    console.log("auth token:", token)

    try {
        const user = await User.findByToken(token)
        console.log(user)

        // req.user = user;
        // req.user = req.session.user;
        // req.token = token;

        if (!user) throw httpError(403)

        next()
    }
    catch (err) {
        next(err)
    }
}

module.exports = auth;