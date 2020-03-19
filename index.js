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

app.use(cors());

app.listen(process.env.PORT);

moongoose.connect(process.env.MONGODB_CONNECTION_URL, { useNewUrlParser: true });