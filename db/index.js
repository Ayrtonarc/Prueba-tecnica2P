const mongoose = require("mongoose")



const connectDB =async () => {
    await mongoose.connect("mongodb://localhost/StorageDBV");
    console.log("MongoDB Connected");
}

module.exports = { connectDB }