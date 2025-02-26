import { Router, type Request, type Response } from 'express';
//import { HistoryService, type Request, type Response }  from '../../service/historyService.js';
//import {WeatherService} from '../../service/weatherService.js';
const router = Router();



// TODO: POST Request with city name to retrieve weather data
router.post('/', async (req: Request, res: Response) => {
  const {router} = req.body;

  try {

  }
  // TODO: GET weather data from city name
  // TODO: save city to search history
});

// TODO: GET search history
router.get('/historyService', async (req: Request, res: Response) => {
  try {
    const searchHistory: string = await fs.readFile('/src/service/historyService.json')
  } catch (error) {
    console.error('error getting search history', error);
    return res.status(500).json({message: 'error getting search history', error})
  }
});

// * BONUS TODO: DELETE city from search history
router.delete('/history/:id', async (req: Request, res: Response) => {});

export default router;
