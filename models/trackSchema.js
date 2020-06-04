const {
    Schema,
    model,
    Types
} = require('mongoose')
const schema = new Schema({
    trackName: {
        type: String,
        required: true
    },
    path: {
        type: String,
        required: true
    },
    file: {
        type: Buffer,
        required: true
    },
    mimetype: {
        type: String,
        required: true
    },
    uploadOn: {
        type: Date,
        default: Date.now
    },
    owner: [{
        type: Types.ObjectId,
        ref: 'Musician'
    }],
    likes: {
        type: Number
    }
})
module.exports = model('Track', schema)