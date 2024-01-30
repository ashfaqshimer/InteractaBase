import mongoose from 'mongoose';
import { MongoMemoryServer } from 'mongodb-memory-server';

let mongoServer; // Declare mongoServer at a higher scope

export const connectDb = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(
      `MongoDB Connected: ${conn.connection.host}`.cyan.underline.bold,
    );
  } catch (err) {
    console.error(err.message);
  }
};

// Provide connection to a new in-memory database server.
export const connectTestDb = async () => {
  // NOTE: before establishing a new connection close previous
  await mongoose.disconnect();
  mongoServer = await MongoMemoryServer.create(); // Assign value to mongoServer
  const mongoUri = await mongoServer.getUri();
  const conn = await mongoose.connect(mongoUri);
  console.log(
    `MongoDB Test DB Connected: ${conn.connection.host}`.blue.underline.bold,
  );
};

// Remove all data from collections
export const clear = async () => {
  const collections = mongoose.connection.collections;
  for (const key in collections) {
    await collections[key].deleteMany();
  }
};

// Remove and close the database and server.
export const close = async () => {
  await mongoose.disconnect();
  console.log(`MongDB database disconnected`.bgYellow);
  if (mongoServer) {
    await mongoServer.stop();
  }
};
