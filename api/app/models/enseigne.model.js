const mongoose = require('mongoose');

const EnseigneSchema = mongoose.Schema({
    name:{type:String, unique:true},
    email:String,
    phone:String,
    address:String,
    imageURL:String,
    state:String
}, {
    timestamps: true
});

module.exports = mongoose.model('Enseigne', EnseigneSchema);
