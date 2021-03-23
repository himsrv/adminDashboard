// imports to create a schema/model
const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

// create posts schema -- // moved from app.js //
const AreaSchema = new mongoose.Schema({
    name: {
        type: String
    },
    series: {
        type: Array
    }
});

module.exports = mongoose.model('Area', AreaSchema,'area');