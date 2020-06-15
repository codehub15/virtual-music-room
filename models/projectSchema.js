const {
    Schema,
    model,
    Types
} = require('mongoose')

const schema = new Schema({
    name: {
        type: String,
        required: true
    },
    owner: {
        type: Types.ObjectId,
        ref: 'Musician'
    },
    tracks: [{
        type: Types.ObjectId,
        ref: 'Track'
    }]
})

module.exports = model('Project', schema)