const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema

const VideoSchema = new Schema({
    onet: {
        type: String,
        required: false
    },
    videocode: {
        type: String,
        required: false
    },
    title: {
        type: String,
        required: false
    },
    parent: {
        type: String,
        required: false
    },
    cluster: {
        type: Array,
        required: false
    },
    // html: {
    //     type: String,
    //     required: true
    // }
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = Video = mongoose.model('video', VideoSchema);