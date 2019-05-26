var mongoose = require('mongoose');

// Variables
var mongoURI = process.env.MONGODB_URI || 'mongodb://localhost:27017/server_test';

// Drop database
mongoose.connect(mongoURI, { useNewUrlParser: true }, function () {
    mongoose.connection.db.dropDatabase(function () {
        console.log(`Dropped database: ${mongoURI}`);
        process.exit(0);
    });
});
