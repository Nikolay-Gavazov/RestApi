const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema.Types;

const studioSchema = new mongoose.Schema({
    studioName: {
        type: String,
        required: true
    },
    img:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    comments: [{
        type: ObjectId,
        ref: "Comment"
    }],
})

module.exports = mongoose.model('Studio', studioSchema);
