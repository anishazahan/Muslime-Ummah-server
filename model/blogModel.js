const mongoose = require('mongoose');

const blogSchema = mongoose.Schema({
    blogName: {
        type: String,
        required: true,
        trim: true
    },
    date: {
        type: String,
        required: true,
        trim: true
    },
    writer: {
        type: String,
        required: true,
        trim: true
    },
    blogText: {
        type: String,
        required: true
    },
    blogImg: {
        type: String,
        required: true
    }
    // blogImg: {
    //     type: String,
    //     default: 'Open',
    //     enum: ['Open', 'Close']
    // }
})

const blogModel = mongoose.model("Blog", blogSchema)
module.exports = blogModel