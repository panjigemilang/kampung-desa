const mongoose = require("mongoose")
const Schema = mongoose.Schema

const PostSchema = new Schema({
  judul: {
    type: String,
    required: true
  },
  deskripsi: {
    type: String,
    required: true
  },
  foto: {
    type: String
  },
  date: {
    type: Date,
    default: Date.now
  }
})

module.exports = User = mongoose.model("post", PostSchema)
