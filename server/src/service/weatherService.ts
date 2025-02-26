import dotenv from 'dotenv';
dotenv.config();

// TODO: Define an interface for the Coordinates object
interface Coordinates {
  city: string,
  longitude: number,
  latitude: number,
};

// TODO: Define a class for the Weather object
class weatherData {
  city: string;
  longitude: number;
  latitude: number; 

  constructor (city: string,longitude: number,latitude: number){
    this.city = city;
    this.longitude = longitude;
    this.latitude = latitude;
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
  private async fetchLocationData(query: string) {
    return `${this.cityName}, ${this.apiKey}, ${this.baseURL}`;

    }
  }
  // TODO: Create destructureLocationData method
  private destructureLocationData(locationData: Coordinates): Coordinates {

  }
  // TODO: Create buildGeocodeQuery method
  // private buildGeocodeQuery(): string {}
  // TODO: Create buildWeatherQuery method
  // private buildWeatherQuery(coordinates: Coordinates): string {}
  // TODO: Create fetchAndDestructureLocationData method
  // private async fetchAndDestructureLocationData() {}
  // TODO: Create fetchWeatherData method
  // private async fetchWeatherData(coordinates: Coordinates) {}
  // TODO: Build parseCurrentWeather method
  // private parseCurrentWeather(response: any) {}
  // TODO: Complete buildForecastArray method
  // private buildForecastArray(currentWeather: Weather, weatherData: any[]) {}
  // TODO: Complete getWeatherForCity method
  // async getWeatherForCity(city: string) {}
}

export default new WeatherService();
