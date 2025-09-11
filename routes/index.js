
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

router.get('/error', (req, res) => {
  throw new Error('Simulazione 500 per test SRE');
});

module.exports = router;
