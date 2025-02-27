// @ts-nocheck
import dotenv from 'dotenv';
dotenv.config();

// TODO: Define an interface for the Coordinates object
interface Coordinates {
  city: string,
  longitude: number,
  latitude: number,
};

// TODO: Define a class for the Weather object
class weatherCoordinates {
  city: string;
  lat: number;
  lon: number; 

  constructor (city: string,lat: number,lon: number){
    this.city = city;
    this.lat = lat;
    this.lon = lon;
  }

}

// TODO: Complete the WeatherService class
// TODO: Define the baseURL, API key, and city name properties
class WeatherService {
  baseURL: string;
  apiKey: string;
  cityName: string;
  
  constructor (baseURL:string, apiKey: string, cityName: string) {
    this.baseURL = baseURL;
    this.apiKey = apiKey;
    this.cityName = cityName;

  }

  // TODO: Create fetchLocationData method
  private async fetchLocationData(city: string){
    const baseURL = 'https://api.openweathermap.org';

    try {
      const url = `${baseURL}?q=${encodeURIComponent(city)}&appid=${apiKey}`;

      const response = await fetch(url);

      if(!response.ok){
        throw new Error(`Error: ${response.status} ${response.statusText}`);
      }

      const data = await response.json();
      return data;
    } catch(error){
      console.error('Error fetching location data:',error);
      throw error;
    }
    }
  }

  // TODO: Create destructureLocationData method
  //private destructureLocationData(location: Coordinates): Coordinates {
    // const { city, coordinates : {lat, lon}}} = locationData;

    // return {
    //   city,
    //   lat,
    //   lon,
    // };
  



  // TODO: Create buildGeocodeQuery method
  //  private buildGeocodeQuery(): string {
    // return city.coord.lat

  // TODO: Create buildWeatherQuery method
  //  private buildWeatherQuery(coordinates: Coordinates): string {
    // const baseURL = 'https://api.openweathermap.org'
  
  // TODO: Create fetchAndDestructureLocationData method
  // private async fetchAndDestructureLocationData() {

  
  // TODO: Create fetchWeatherData method
  // private async fetchWeatherData(coordinates: Coordinates) {}
  // TODO: Build parseCurrentWeather method
  // private parseCurrentWeather(response: any) {}
  // TODO: Complete buildForecastArray method
  // private buildForecastArray(currentWeather: Weather, weatherData: any[]) {}
  // TODO: Complete getWeatherForCity method
  // async getWeatherForCity(city: string) {}
// }

export default new WeatherService();
