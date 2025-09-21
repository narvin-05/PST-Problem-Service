const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require("mongoose")
const { PORT } = require('./config/server.config');
const apiRouter = require('./routes');
const errorHandler = require('./utils/errorHandler');
const dbConnector = require('./config/db.config');
const Problem = require("./models/index");


const app = express();

app.use(cors())

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());


// If any request comes and route starts with /api, we map it to apiRouter
app.use('/api', apiRouter);


app.get('/ping', (req, res) => {
    console.log("health check server alive");
    return res.json({message: 'Problem Service is alive'});
});

// last middleware if any error comes
app.use(errorHandler);

app.listen(PORT,async() => {
    console.log(`Server started at PORT: ${PORT}`);
    // await dbConnector();
    mongoose.connect("mongodb+srv://dummy:3gwHzzh83weEzpqY@problem-service.egeaqkz.mongodb.net/?retryWrites=true&w=majority&appName=Problem-Service");
    console.log("Successfully connected to db");
});