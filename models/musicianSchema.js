const mongoose = require("mongoose")
const { Schema, Types } = mongoose
const jwt = require("jsonwebtoken")
const { encrypt, compare } = require("../lib/encryption")
const env = require("../config/config")


const MusicianSchema = new Schema({
    name: { type: String, required: true, unique: true },
    profileImgName: { type: String },
    profileImgType: { type: String },
    img: { data: Buffer, contentType: String },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    level: { type: String, required: true },
    // musicStyle: [],
    // instruments: [],
    tracks: [{ type: Types.ObjectId, ref: 'Track' }],
    role: { type: String, enum: ["Admin", "User", "Musician", "Producer", "Sound Engineer"], required: true },
    accountCreatedOn: { type: Date, default: Date.now },
    tokens: [{ token: { type: String, required: true } }]
})



MusicianSchema.methods.generateAuthToken = function() {
    const user = this;
    const token = jwt.sign({ _id: user._id }, env.jwt_key).toString()
    user.tokens.push({ token })
    return token
}


MusicianSchema.methods.getPublicFields = function() {
    let returnObject = {
        name: this.name,
        level: this.level,
        email: this.email,
        tokens: this.tokens,
        _id: this._id
    }
    return returnObject
}


MusicianSchema.pre("save", async function(next) {
    this.password = await encrypt(this.password)
    next()
})


MusicianSchema.methods.checkPassword = async function(password) {
    const user = this;
    return await compare(password, user.password)
}


MusicianSchema.statics.findByToken = function(token) {
    const User = this;
    let decoded;
    try {
        decoded = jwt.verify(token, env.jwt_key)
        console.log(decoded)
    } catch (e) {
        return;
    }

    const user = User.findOne({
        _id: decoded._id
    }).select("-password -__v")
    return user;
}


module.exports = mongoose.model('Musician', MusicianSchema)