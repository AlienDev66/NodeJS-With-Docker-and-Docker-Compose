const express = require('express');

const PORT = 3000;
const HOST = '0.0.0.0';

const app = express();

app.get('/',(req, res)=>{
  res.send('Hello World - UBUNTU - DOCKER NODEJS DOCKER-COMPOSE');
})

app.listen(PORT, HOST);