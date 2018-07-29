var mongoose = require('mongoose');

var managerSchema = mongoose.Schema({
    username : {
        type : String,
        required : true
    },
    password : {
        type : String,
        required : true
    }
});

var Manager = module.exports = mongoose.model('Manager',managerSchema);

module.exports.checkUser = function(user, callback){
    Manager.findOne()
    .where('username').equals(user.username)
    .where('password').equals(user.password)
    .select('username')
    .exec(callback);
}
