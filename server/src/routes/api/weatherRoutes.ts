import { Router, type Request, type Response } from 'express';
import dotenv from 'dotenv';
import fs from 'fs';
dotenv.config();
//import { HistoryService, type Request, type Response }  from '../../service/historyService.js';
//import {WeatherService} from '../../service/weatherService.js';
const router = Router();

// TODO: POST Request with city name to retrieve weather data
router.post('/', async (req: Request, res: Response) => {
    const cityName = req.body.cityName;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${process.env.API_KEY}&units=metric`;
  
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Error: ${response.status} ${response.statusText}`);
      }
      const data = await response.json();
      console.log(data); // Process the weather data as needed
      res.json(data)
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  }
  
  // TODO: GET weather data from city name
  // TODO: save city to search history
);

// TODO: GET search history
router.get('/historyService', async (req: Request, res: Response) => {
  try {
    const searchHistory: string = await fs.readFileSync('/src/service/historyService.json','utf8')
    return res.json(searchHistory)
  } catch (error) {
    console.error('error getting search history', error);
    return res.status(500).json({message: 'error getting search history', error})
  }
});

// * BONUS TODO: DELETE city from search history
//router.delete('/history/:id', async (req: Request, res: Response) => {});

export default router;
