const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();

app.use(express.static('./public')).get('/', function(req,res){
    res.send('./index.html')
})

app.use(cors());

module.exports = app;