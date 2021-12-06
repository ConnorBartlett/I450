//api

const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Comment = require('../models/Comment');
const Image = require('../models/Image');

const url = "mongodb+srv://testuser:testpassword@captcha-comments.m9fie.mongodb.net/captcha-comments?retryWrites=true&w=majority"; 
mongoose.Promise = global.Promise;

mongoose.connect(url, function(err){
    if(err){
        console.error("error: " + err);
    } else {
        console.log('mongoose connection was successful');
    }
}); 

//---------------------------------------COMMENTS--------------------------------------------------------------
//GET all comments
//returns a JSON object of comments from database
router.get('/comment', function(req, res){
    console.log('GET all comments');
    Comment.find({}).exec(function(err, comments){
        if(err){
            console.log('could not retrieve comments');
        } else {
            res.json(comments);
        }
    });
});

//GET all comments associated with a specific Image ID
router.get('/comment/:id', function(req, res){
    console.log('GET all comments associated with image');
    var idNum = req.params.id;
    Comment.find({imageId: idNum}).exec(function(err, comment){
        if(err){
            console.log('could not retrieve comment');
            console.log(`imageId: ${imageId}`);
            console.log(`idNum: ${idNum}`);
        } else {
            res.json(comment);
            console.log(comment);
        }
    });
});

//POST comment
router.post('/comment', function(req, res){
    console.log('POST comment');
    var newComment = new Comment();
    newComment.imageId = req.body.imageId;
    console.log("imageId: " + req.body.imageId);
    newComment.userName = req.body.userName;
    console.log("username: " + req.body.userName);
    newComment.commentBody = req.body.commentBody;
    console.log("username: " + req.body.commentBody);
    newComment.save(function(err, insertedComment){
        if(err){
            console.log('error posting comment');
        } else{
            res.json(insertedComment);
            console.log(insertedComment);
        }
    });
});

//PUT (update) comment
router.put('/comment/:id', function(req, res){
    console.log('Update comment');
    Comment.findByIdAndUpdate(req.params.id,
        {
            $set: {userName: req.body.userName, commentBody: req.body.commentBody}
        }, 
        {
            new: true,
        },
        function(err, updatedComment){
            if(err){
                res.send("Error updating comment");
            } else {
                res.json(updatedComment);
            }
        }
        );
});

//DELETE comment
router.delete('/comment/:id', function(req, res){
    console.log('Comment deleted');
    Comment.findByIdAndRemove(req.params.id, function(err, deletedComment){
        if(err){
            res.send('Error deleting comment');
        } else{
            res.json(deletedComment);
        }
    })
});
//-----------------------------------END COMMENTS--------------------------------------------------------------

//-----------------------------------BEGIN IMAGES--------------------------------------------------------------
//get one image by id
router.get('/image/:id', function(req, res){
    console.log('GET image by ID');
    Image.findOne({ imageId }).exec(function(err, image){
        if(err){
            console.log('could not retrieve image');
        } else {
            res.json(image);
        }
    });
});
module.exports = router;