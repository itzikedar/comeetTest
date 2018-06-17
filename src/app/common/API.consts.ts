const APP_ID = '425e17cebcd53cd413b14a846d067b6d';
const BASE_URL = 'https://api.openweathermap.org/data/2.5/box/city?bbox='
export const API = {
  weatherByCords: (data) =>
    `${BASE_URL}${data.lonLeft},${data.latBottom},${data.lonRight},${data.latTop}&appid=${APP_ID}`,
};

