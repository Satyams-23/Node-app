const mongoose = require('mongoose');
const nodeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true

    },
    desc: String
})
const node = mongoose.model('node', nodeSchema)

module.exports = node;

