const express = require('express');

const cors = require('cors');

const moongoose = require('mongoose');

const Data = moongoose.Schema({
  data: String
});

const Collection = moongoose.model('Data', Data);

const app = express();

app.use(cors());

app.use(express.text({ limit: '50mb', extended: true }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));

app.get('/', async (request, response, next) => {
  let data = request.query.data;
  await Collection.create({ data: data });
  console.log(`data => ${data}`);
  response.status(204).send();
});

app.post('/', async (request, response, next) => {
  let data = request.body;
  await Collection.create({ data: data });
  console.log(`data => ${data}`);
  response.status(204).send();
});

app.listen(process.env.PORT);

moongoose.connect(process.env.MONGODB_CONNECTION_URL, { useNewUrlParser: true });