// imports to create a schema/model
const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

// create posts schema -- // moved from app.js //
const LineSchema = new mongoose.Schema({
    name: {
        type: String
    },
    value: {
        type: String   
    }
});

module.exports = mongoose.model('Line', LineSchema,'line');