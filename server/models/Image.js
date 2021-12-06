//mongoose translates mongodb object to JSON format
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const imageSchema = new Schema({
    imageId: Number,
    photographer: String,
    url: String,
});

module.exports = mongoose.model('image', imageSchema, 'images');
// .model(object name, data model, collection name)