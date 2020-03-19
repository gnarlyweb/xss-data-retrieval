const express = require('express');

const moongoose = require('mongoose');

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

app.listen(8080);

moongoose.connect(process.env.MONGODB_CONNECTION_URL, { useNewUrlParser: true });