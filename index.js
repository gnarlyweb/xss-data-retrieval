const express = require('express');

const app = express();

app.get('/', (request, response, next) => {
  let data = request.query.data;
  console.log(`data => ${data}`);
  response.status(200);
});

app.listen(8080);