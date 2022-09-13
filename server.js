const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const request = require('request');



const app = express();

// Prepare app for serving static files

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'clientSide/public')));


// Render Index Page
app.get('/', (req, res) => {
    res.render('index');
});

const server = app.listen(5000, () => {
    console.log(`The application started on port ${server.address().port}`);
});
