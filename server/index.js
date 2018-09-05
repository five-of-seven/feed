const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
console.log(__dirname)
app.use(express.static('../public'))

app.listen(3000, () => console.log('listening on port 3000!'))