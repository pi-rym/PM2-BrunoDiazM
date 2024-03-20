const mongoose = require('mongoose');
require('dotenv').config();


const dbConfig = async () => {
    // console.log(process.env.MONGODB_URI);
    await mongoose.connect(process.env.MONGODB_URI);

}


module.exports = dbConfig;