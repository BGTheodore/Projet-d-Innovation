const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')
const multer = require('multer')
// Configuring the database
const dbConfig = require('./config/database.config.js');
const mongoose = require('mongoose');
// create express app
const app = express();

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))
// parse requests of content-type - application/json
app.use(bodyParser.json())
mongoose.Promise = global.Promise;
// Connecting to the database
mongoose.connect(dbConfig.url, {
    useNewUrlParser: true
}).then(() => {
    console.log("Successfully connected to the database");
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});

// define a simple route
app.get('/', (req, res) => {
    res.json({"message": "Welcome to EasyNotes application. Take notes quickly. Organize and keep track of all your notes."});
});

// Pour stocker les images
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'images/')
    },
    filename: (req, file, cb) => {
        var filedate =  'SR' + Date.now() + file.originalname;
        cb(null, filedate )
    },
})
const upload = multer({ storage: storage })
app.use(cors())
app.post('/image', upload.single('file'), function (req, res) {
    res.json({})
})


// Require Enseignes routes
require('./app/routes/enseigne.routes.js')(app);
// listen for requests
app.listen(8080, () => {
    console.log("Server is listening on port 8080");
});
