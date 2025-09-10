const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.status(200).send('Hello World!');
});

// 👇 nuova route per generare errore 500
app.get('/error', (req, res) => {
  throw new Error('Simulazione 500 per test SRE');
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
