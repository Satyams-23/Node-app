const mongoose = require('mongoose');
const nodeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true

    },
    desc: String
})
const nodemodel = mongoose.model('node', nodeSchema)

module.exports = nodemodel;

