const mongoose = require('mongoose');
module.exports = mongoose.connect(process.env.DB)
    .then(() => { console.log("Connected To Database") })
    .catch(err => { console.log("Error in connecting to database") })