const express = require('express');
const app = express();

const PORT = 3000;

const serverStart = () => {
  console.log('Listen on 3000 port...');
};

const getHome = (req, res) => {
  console.log('Home');
  res.send('Browser Home');
};

app.get('/', getHome);

app.listen(PORT, serverStart);
