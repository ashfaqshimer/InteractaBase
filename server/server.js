import express from 'express';
import { config } from 'dotenv';
import morgan from 'morgan';
import colors from 'colors';

// Local imports
import connectDb from './config/db.js';
import errorHandler from './middleware/errorHandler.js';

// Load env vars
config({ path: '.env' });

// Connect to database
connectDb();

// Route files
import authRoutes from './routes/authRoutes.js';
import userRoutes from './routes/userRoutes.js';

const app = express();

// Body parser
app.use(express.json());

// Dev loggin middleware
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

// // Set static folder
// app.use(express.static(join(__dirname, 'public')));

// Mount routers
app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/users', userRoutes);

// // Error handler
app.use(errorHandler);

// ------------------------------SERVER CONFIGURATION-----------------------------------

const PORT = process.env.PORT || 5000;

const server = app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
  )
);

// Handle unhandled promise rejections
process.on('unhandledRejection', (err, promise) => {
  console.error(`Error: ${err.message}`.red);
  // Close server and exit process
  server.close(() => process.exit(1));
});