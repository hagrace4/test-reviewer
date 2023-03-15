var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const Question = require('../models/question');





/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

// GET a random question
router.get('/question', (req, res, next) => {
  Question.aggregate([{ $sample: { size: 1 } }])
    .then((result) => {
      res.render('question', { question: result[0] });
    })
    .catch((err) => {
      console.log('Error retrieving question:', err);
      res.status(500).send('Error retrieving question');
    });
});


module.exports = router;


mongoose.connect('mongodb+srv://user:user@cluster0.vo3v4qz.mongodb.net/?retryWrites=true&w=majority', {
}).then(() => {
  console.log('Connected to database!');
}).catch((err) => {
  console.log('Error connecting to database:', err);
});

