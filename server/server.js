const express = require('express');
const path = require('path');
const app = express();
const apiRouter = require('./router.js');
app.use(express.json());
app.use(express.static(path.join(__dirname, '../static')));
app.use('/', apiRouter);
app.listen(80, ()=>{
    console.log('listening at port 80');
});//created express server at port 80