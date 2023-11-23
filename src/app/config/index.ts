import dotenv from 'dotenv';
import path from "path"


dotenv.config({ path: path.join(process.cwd(), ".env") });

export default {
  port: process.env.port,
  mongodb_url: process.env.mongodb_url,
};

