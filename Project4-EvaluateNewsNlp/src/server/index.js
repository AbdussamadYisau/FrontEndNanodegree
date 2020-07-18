var path = require('path');
const express = require('express');
const bodyParser = require("body-parser");
const cors = require("cors");
const mockAPIResponse = require('./mockAPI.js');
const aylien = require('aylien_textapi');

const aylienapi = new aylien({
    application_id: process.env.API_ID,
    application_key: process.env.API_KEY 
})

const dotenv = require('dotenv')
dotenv.config()

const app = express()
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('dist'))

console.log(__dirname)

app.get('/', function (req, res) {
    // res.sendFile('dist/index.html')
    res.sendFile(path.resolve('src/client/views/index.html'))
})

app.post('/sentiment', (req,res) => {
    textapi.sentiment({url: req.body.url}, function(err,result){
        if(err) {
            console.log('Error encountered uring Aylien request.')
            res.send();
            return 0;
        }

        console.log('The request works fine!');
        res.send(result);
    })
})
// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})
