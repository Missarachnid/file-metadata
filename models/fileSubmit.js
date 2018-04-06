const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const urlSchema = new Schema({
  name: String,
  size: Number,
  date: String},
  {timestamps:true});

const ModelClass = mongoose.model('uploadfile', urlSchema);

module.exports = ModelClass;