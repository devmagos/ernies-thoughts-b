const mongoose = require('mongoose')
const Schema = mongoose.Schema

const blogSchema = new Schema({
        publicationTitle: String,
        body: String,
        authorName: String,
        date: Date

    })

const blog = mongoose.model('blog', blogSchema)

module.exports = blog