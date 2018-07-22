var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONDB_URI || 'mongodb://localhost:27017/TodoApp', { useNewUrlParser: true });


module.exports = {
    // mongoose : mongoose
    mongoose
};