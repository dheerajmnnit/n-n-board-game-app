var express = require('express'),
    path = require('path'),
    app = express();

//Use modules
//Set apps root directory
app.use(express.static(path.join(__dirname, 'app')));

//Simplest router ever. All routing handled via default GETS in angular
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '/app/index.html'));
});

app.listen(3000, "0.0.0.0");