export interface WeatherResponse {
  weather: WeatherItem[];
  main: MainWeather;
}

export interface WeatherItem {
  id: number;
  main: string;
  description: string;
  icon: string;
}

export interface MainWeather {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
}