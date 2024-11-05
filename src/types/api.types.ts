interface City {
  id: string
  name: string
}

interface CityResponse {
  location: City[]
}

interface WeatherDay {
  fxDate: string
  textDay: string
  tempMax: number
  tempMin: number
  humidity: string
}

interface WeatherForecast {
  //   city: string
  daily: WeatherDay[]
}
