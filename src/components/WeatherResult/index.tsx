import CardWeather from 'components/CardWeather'
import LoadingState from 'components/LoadingState'
import { useDispatch, useSelector } from 'react-redux'
import { setLoadingData, setSearchLoading } from 'redux/appSlice'
import { RootState } from 'redux/store'
import {
  useGetCityByNameQuery,
  useGetWeatherByCityIdQuery
} from 'services/weatherApi'

const WeatherResult = () => {
  const queryID = useSelector((state: RootState) => state.appState.query)

  const {
    data: cityData,
    isFetching: cityDataFetching,
    isError: cityError
  } = useGetCityByNameQuery(queryID, {
    skip: !queryID
  })

  const cityID: any = cityData?.location?.[0]?.id

  const {
    data: weatherData,
    isFetching: weatherDataFetching,
    isError: weatherError
  } = useGetWeatherByCityIdQuery(cityID, { skip: !cityID })

  const dispatch = useDispatch()
  // this is to set search bar position to mid when weather data is not exist yet
  dispatch(setSearchLoading(weatherData || null))
  // this is to set loading when data is fetching
  dispatch(setLoadingData(cityDataFetching || weatherDataFetching))

  return (
    <div className="w-full mx-auto text-white">
      {cityError ||
        (weatherError && (
          <div className="text-lg md:text-3xl font-bold mb-2 md:mb-6 text-center text-red-500">
            Error while fetching data
          </div>
        ))}
      {cityDataFetching || weatherDataFetching ? (
        <LoadingState />
      ) : (
        <h2
          className={`text-lg md:text-3xl font-bold mb-2 md:mb-6 text-center ${
            !weatherData && 'hidden'
          }`}
        >
          Weather Forecast for 7 days in {cityData?.location?.[0]?.name}
        </h2>
      )}
      <div className="flex flex-col max-w-[448px] md:max-w-none md:flex-row md:flex-wrap mx-auto md:justify-center gap-4">
        {weatherData &&
          weatherData.daily.map((item: WeatherForcast, index: number) => (
            <CardWeather key={index} item={item} index={index} />
          ))}
      </div>
    </div>
  )
}

export default WeatherResult
