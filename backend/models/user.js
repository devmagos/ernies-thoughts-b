const mongo = require("mongoose");
const schema = mongo.Schema({
    fullname:{ 
    type: String,
    required: true
    },
    username:{ 
       type: String,
       required: true,
       unique: true
    },
    email: {
        type:String,
        required: true,
        unique: true
    },
    password: {
        type:String,
        required: true
    }
})

module.exports = mongo.model('user', schema)