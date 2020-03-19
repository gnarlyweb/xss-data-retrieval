const express = require('express');

const moongoose = require('mongoose');

const cors = require('cors');

const Payload = moongoose.Schema({
  data: String
});

const PayloadCollection = moongoose.model('Payload', Payload);

const app = express();

app.get('/', async (request, response, next) => {
  let data = request.query.data;
  await PayloadCollection.create({ data: data });
  console.log(`data => ${data}`);
  response.status(204).send();
});

app.options('/', function (req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader('Access-Control-Allow-Methods', '*');
  res.setHeader("Access-Control-Allow-Headers", "*");
  res.end();
});

app.listen(process.env.PORT);

moongoose.connect(process.env.MONGODB_CONNECTION_URL, { useNewUrlParser: true });