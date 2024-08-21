const mongoose = require('mongoose')

const post = new mongoose.Schema({
    goal : {
        type : String,
        required : true
    },
    tone : {
        type : String,
        required : true
    },
    persona : {
        type : String,
        required :true
    },
    prompt : {
        type : String,
        required :true
    },
    content : {
        type : String
    },
    createdby : {
        type : String
    }
})

module.exports = mongoose.model('Post',post)