//mongoose translates mongodb object to JSON format
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new Schema({
    imageId: Number,
    userName: String,
    commentBody: String
});

module.exports = mongoose.model('comment', commentSchema, 'comments');
// .model(object name, data model, collection name)