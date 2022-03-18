const mongoose = require('mongoose');

const EnseigneSchema = mongoose.Schema({
    name:String,
    email:String,
    phone:String,
    address:String,
    imageURL:String,
    state:String
}, {
    timestamps: true
});

module.exports = mongoose.model('Enseigne', EnseigneSchema);
