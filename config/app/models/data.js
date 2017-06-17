var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
    name  : String,
    address  : String,
    old   : Number
});

module.exports = mongoose.model('sinhviens', userSchema);