interface City {
  id: string
  name: string
}

interface CityResponse {
  location: City[]
}

interface WeatherForcast {
  fxDate: string
  tempMax: string
  tempMin: string
  textDay: string
  iconDay: string
  humidity: string
  windSpeedDay: string
  precip: string
  uvIndex: string
}

interface WeatherForecast {
  //   city: string
  daily: WeatherForcast[]
}
