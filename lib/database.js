import mongoose from 'mongoose';

let isConnected = false; // track the connection

const connectMongoDB = async () => {
  mongoose.set('strictQuery', true);

  if (isConnected) {
    console.log('MongoDB is already connected');
    return;
  }

  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      dbName: 'fs-react-next',
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    isConnected = true;

    console.log('MongoDB connected');
  } catch (error) {
    console.log(`Error connecting to MongoDB: ${error}`);
  }
};

export default connectMongoDB;
