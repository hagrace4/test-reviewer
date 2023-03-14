var express = require('express');
var router = express.Router();





/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;


mongoose.connect('mongodb+srv://user:user@cluster0.vo3v4qz.mongodb.net/?retryWrites=true&w=majority', {
}).then(() => {
  console.log('Connected to database!');
}).catch((err) => {
  console.log('Error connecting to database:', err);
});

