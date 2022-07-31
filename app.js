const http = require('http');
const bodyParser = require('body-parser');

const express = require('express');

const app = express();

const adminRouters = require('./routes/admin');
const shopRouters = require('./routes/shop');

app.use(bodyParser.urlencoded({extended: false}));

app.use(adminRouters);
app.use(shopRouters);

const server = http.createServer(app);

server.listen(3000);