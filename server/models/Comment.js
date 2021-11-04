
//mongoose translates mongodb object to JSON format
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new Schema({
    userName: String,
    commentBody: String
});

module.exports = mongoose.model('comment', commentSchema, 'comments');