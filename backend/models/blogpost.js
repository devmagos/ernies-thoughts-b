const mongoose = require('mongoose')
const schema = mongoose.Schema({
    
    publicationTitle:{
        type:String,
        required:true,
    },
    body:{
        type:String,
        required:true 
    },
    authorName:{
        type:String,
        required:true,
    },    
    date: {
        type:Date
   }
  })

module.exports = mongoose.model('blogpost',schema)