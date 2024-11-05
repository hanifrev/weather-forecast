import { useDispatch, useSelector } from 'react-redux'
import { setSearchLoading } from 'redux/appSlice'
import { RootState } from 'redux/store'
import {
  useGetCityByNameQuery,
  useGetWeatherByCityIdQuery
} from 'services/weatherApi'

const WeatherResult = () => {
  const queryID = useSelector((state: RootState) => state.appState.query)

  const { data: cityData, isFetching: cityDataFetching } =
    useGetCityByNameQuery(queryID, {
      skip: !queryID
    })

  const cityID: any = cityData?.location?.[0]?.id
  const { data: weatherData, isFetching: weatherDataFetching } =
    useGetWeatherByCityIdQuery(cityID, { skip: !cityID })

  console.log(queryID)
  console.log(weatherData)

  console.log(
    cityDataFetching ? 'City Data Fetching...' : 'City Fetch Completed'
  )
  console.log(
    weatherDataFetching ? 'Weather Fetching...' : 'Weather Fetch Completed'
  )

  const dispatch = useDispatch()
  dispatch(setSearchLoading(weatherData || null))

  return (
    <div className="border rounded shadow p-4 w-full max-w-md mx-auto text-white">
      {(cityDataFetching || weatherDataFetching) && <div>LOADING....</div>}
      <h2 className="text-lg font-bold mb-2">Weather Forecast for 7 days</h2>
      {weatherData &&
        weatherData.daily.map((day: any, index: number) => (
          <div key={index} className="mb-2">
            <p>
              <strong>Date:</strong> {day.fxDate}
            </p>
            <p>
              <strong>Temperature:</strong> {day.tempMin}°C - {day.tempMax}°C
            </p>
            <p>
              <strong>Condition:</strong> {day.textDay}
            </p>
          </div>
        ))}
    </div>
  )
}

export default WeatherResult
