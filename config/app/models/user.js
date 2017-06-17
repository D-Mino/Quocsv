var mongoose = require('mongoose');
var CryptoJS = require("crypto-js");

var userSchema = mongoose.Schema({
    email        : String,
    password     : String,
    admin        : Boolean

});

userSchema.methods.generateHash = function(password) {
    var ciphertext = CryptoJS.AES.encrypt(password, 'secret key sabo');
    return ciphertext.toString();
};

userSchema.methods.validPassword = function(password) {
    var bytes  = CryptoJS.AES.decrypt(this.password, 'secret key sabo');
    var decrypt = bytes.toString(CryptoJS.enc.Utf8);
    if(password==decrypt)
        return true;
    return false;
}

module.exports = mongoose.model('schema', userSchema);