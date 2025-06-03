const express = require('express');
const bodyparser = require('body-parser');
const {PORT} = require('./config/server.config');
const apiRouter = require('./routes'); 

const app = express();

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}));
app.use(bodyparser.text());


app.use('/api', apiRouter);

app.get('/ping', (req,res) =>{
    res.send({"message":"Problem service is alive"})
})

app.listen(PORT, (req,res) =>{
    console.log(`Server is up and running at ${PORT}`);
})