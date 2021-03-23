// imports to create a schema/model
const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

// create posts schema -- // moved from app.js //
const OtherSchema = new mongoose.Schema({
    newUsers: {
        type: Number
    },
    invoices: {
        type: Number
    },
    openIssues: {
        type: Number
    },
    newProjects: {
        type: Number
    },
    
});

module.exports = mongoose.model('Other', OtherSchema,'Other');