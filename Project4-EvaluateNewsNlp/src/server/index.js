var path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mockAPIResponse = require('./mockAPI.js');
const aylienTextApi = require('aylien_textapi');

const dotenv = require('dotenv');
dotenv.config();

const textapi = new aylienTextApi({
    application_id: process.env.API_ID,
    application_key: process.env.API_KEY
});

const app = express()
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('dist'))

console.log(__dirname)

app.get('/', function (req, res) {
    // res.sendFile('dist/index.html')
    res.sendFile(path.resolve('index.html'))
})

app.post("/textEndpoint", (req,res) => {
    const {text} = req.body;

    console.log("Data gotten", text);

    textapi.sentiment({text}, (error, result, remaining) => {
        if (error === null) {
            console.log("Aylien Callback", result, remaining);
            res.send(result);
        }
    })
})

app.post("/urlEndpoint", (req,res) => {
    const {text} = req.body;

    console.log("Data gotten", text);

    textapi.sentiment({text}, (error, result, remaining) => {
        if (error === null) {
            console.log("Aylien Callback", result, remaining);
            res.send(result);
        }
    })
})

// designates what port the app will listen to for incoming requests
const port = 3030;
app.listen(port, function () {
    console.log(`Example app listening on port ${port}!`)
})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})
