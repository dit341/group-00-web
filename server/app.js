var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var morgan = require('morgan');
var path = require('path');
var cors = require('cors');
var history = require('connect-history-api-fallback');

var camelsController = require('./controllers/camels');

// Variables
var mongoURI = process.env.MONGODB_URI || 'mongodb://localhost:27017/animals';
var port = process.env.PORT || 3000;

// Connect to MongoDB
mongoose.connect(mongoURI, { useNewUrlParser: true }, function(err) {
    if (err) {
        console.error(`Failed to connect to MongoDB with URI: ${mongoURI}`);
        console.error(err.stack);
        process.exit(1);
    }
    console.log(`Connected to MongoDB with URI: ${mongoURI}`);
});

// Create Express app
var app = express();
// Parse requests of content-type 'application/json'
app.use(bodyParser.json());
// HTTP request logger
app.use(morgan('dev'));
// Enable cross-origin resource sharing for frontend
app.options('*', cors());
app.use(cors());
// Support Vuejs HTML 5 history mode
app.use(history());
// Serve static assets (for frontend client)
var root = path.normalize(__dirname + '/..');
var client = path.join(root, 'client', 'dist');
app.use(express.static(client));
app.set('appPath', client);

// Define routes
app.get('/api', function(req, res) {
    res.json({'message': 'Welcome to your DIT341 backend ExpressJS project!'});
});
app.use('/api/camels', camelsController);

// Catch all non-error handler for api (i.e., 404 Not Found)
app.use('/api/*', function (req, res) {
    res.status(404).json({ 'message': 'Not Found' });
});

// All other routes redirect to the index.html
app.get('/*', function (req, res) {
    var appPath = req.app.get('appPath');
    var indexPath = path.join(appPath, 'index.html');
    res.sendFile(indexPath);
});

// Error handler (i.e., when exception is thrown) must be registered last
var env = app.get('env');
// eslint-disable-next-line no-unused-vars
app.use(function(err, req, res, next) {
    console.error(err.stack);
    var err_res = {
        'message': err.message,
        'error': {}
    };
    if (env === 'development') {
        err_res['error'] = err;
    }
    res.status(err.status || 500);
    res.json(err_res);
});

app.listen(port, function(err) {
    if (err) throw err;
    console.log(`Express server listening on port ${port}, in ${env} mode`);
    console.log(`Backend: http://localhost:${port}/api/`);
    console.log(`Frontend: http://localhost:${port}/`);
});

module.exports = app;
