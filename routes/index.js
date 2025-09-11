var express = require('express');
var router = express.Router();

app.get('/error', (req, res) => { throw new Error('Simulazione 500 per test SRE'); });
 

router.get('/', function(req, res) {
  res.status(200).send('Hello World!');
});

module.exports = router;
