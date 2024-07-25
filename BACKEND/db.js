const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const connection = await mongoose.connect('mongodb+srv://preetyakshat:gJNfimyfJAPnc3mo@cluster0.mrg4uqr.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0',{
      useNewUrlParser: true, // Set this to true
      useUnifiedTopology: true, // Set this to true
    });
    console.log(`MongoDB connected:"Successfully connected to mongo" ${connection.connection.host}`);
  } catch (error) {
    console.error(`MongoDB connection error: ${error.message}`);
    process.exit(1); // Exit process with failure
  }
};

module.exports = connectDB;