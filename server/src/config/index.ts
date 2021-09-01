import dotenv from 'dotenv';

dotenv.config();

const config = {
  MONGO_URI: process.env.DATABASE_URI,
};

export default config;
