const express = require('express');
const colors = require('colors');

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello  World!');
});

app.listen(port, () => {
  console.log('Server listening on port'.blue, port.toString().green);
});
