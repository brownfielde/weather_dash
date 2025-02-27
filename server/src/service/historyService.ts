// @ts-nocheck
import fs from 'node:fs/promises';

// TODO: Define a City class with name and id properties
class City {
  cityName: string;
  city_id: string;

constructor(
  cityName: string,
  city_id: string,
) {
  this.cityName = cityName;
  this.city_id = city_id;
  } 
};

// TODO: Complete the HistoryService class
class HistoryService {
  // TODO: Define a read method that reads from the searchHistory.json file
   private async read() {
    return await fs.readFile('db/searchHistory.json', 
      { flag: 'a+',
        encoding: 'utf8',
      });
   }
  // TODO: Define a write method that writes the updated cities array to the searchHistory.json file
    private async write(cities: City[]) {
      return await fs.writeFile('db/searchHistory.json', JSON.stringify(cities))
    }

  // TODO: Define a getCities method that reads the cities from the searchHistory.json file and returns them as an array of City objects
  async getCities() {
    return await this.read().then((cities) => {
      let parsedCities: City[];
      try {
        parsedCities = [].concat(JSON.parse(cities));
      } catch (err) {
        parsedCities = [];
      }
      return parsedCities;
    });
  }
  // TODO Define an addCity method that adds a city to the searchHistory.json file
  async addCity(cityName: string, city_id: string) {
    if (!cityName || !city_id) {
      throw new Error ('City and City id cannot be blank')
    }
  }
  // * BONUS TODO: Define a removeCity method that removes a city from the searchHistory.json file
  // async removeCity(id: string) {}
}

export default new HistoryService();
