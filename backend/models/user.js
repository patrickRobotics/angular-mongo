const mongose = require('mongoose');
const uniqueValidater = require('mongoose-unique-validator');

const userSchema = mongose.Schema({
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true}
});

userSchema.plugin(uniqueValidater);

module.exports = mongose.model('User', userSchema);
