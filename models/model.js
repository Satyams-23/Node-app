const mongoose = require('mongoose');
const nodeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true

    },

    desc: String
})
const nodemodel = mongoose.model('nodes', nodeSchema)

module.exports = nodemodel;

