import { registerAs } from "@nestjs/config";

export default registerAs("", async () => ({
  NODE_ENV: String(process.env.NODE_ENV),
  PORT: Number(process.env.NODE_PORT),

  POSTGRES_HOST: process.env.POSTGRES_HOST,
  POSTGRES_PORT: process.env.POSTGRES_PORT,
  POSTGRES_DB: process.env.POSTGRES_DB,
  POSTGRES_USERNAME: process.env.POSTGRES_USERNAME,
  POSTGRES_PASSWORD: process.env.POSTGRES_PASSWORD,
}));
