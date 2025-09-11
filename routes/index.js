
var express = require('express');
var router = express.Router();

router.get('/error', (req, res) => { throw new Error('Simulazione 500 per test SRE'); });

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
