import { Router } from 'express';
import { getWeather, compareAPIs } from "@/controllers/weatherController";

const router = Router();

router.get("/weather", getWeather);
router.get("/weather/compare", compareAPIs);

export default router;