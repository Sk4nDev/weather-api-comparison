import express from "express";
import dotenv from "dotenv";
import cors from 'cors'

dotenv.config();

import weatherRoutes from "./routes/weather";

const app = express();
const port = process.env.PORT || 3001;

app.use(cors({
  origin: process.env.FRONT_APP_BASE_URL || 'http://localhost:3000',
  credentials: true,
}))

app.use('/api', weatherRoutes);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});