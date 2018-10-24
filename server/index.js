const express = require('express');
const bodyparser = require('bodyparser');

const app = express();

app.use(bodyparser.json());

const port = 4000;
app.listen(port,function(`server is listening on port: ${port}`))