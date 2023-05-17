export interface ITemp {
  current: {
    feelslike_c: number;
    temp_c: number;
    humidity: number;
    wind_mph: number;
    cloud: number;
  };
  location: {
    name: string;
    localtime: string;
    localtime_epoch: number;
  };
  forecast: {
    forecastday: [
      {
        astro: {
          sunrise: string;
          sunset: string;
        };
        date: string;
        day: {
          avgtemp_c: number;
          daily_chance_of_rain: number;
          condition: {
            icon: string;
          };
        };
        hour: [
          {
            time: string;
          }
        ];
      }
    ];
  };
}
