import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.join(process.cwd(), '.env') });

export default {
  port: process.env.port,
  mongodb_url: process.env.mongodb_url,
  bcrypt_salt_rounds: process.env.bcrypt_salt_rounds,
};
