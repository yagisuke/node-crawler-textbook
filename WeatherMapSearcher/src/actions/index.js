import axios from 'axios';

const OWM_API_KEY = 'a91e1baafe5b960b5d6ac7f4b17a5361';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${OWM_API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},us`;
  const request = axios.get(url);
  return {
    type: FETCH_WEATHER,
    payload: request
  };
}
