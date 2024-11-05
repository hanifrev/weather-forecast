import SearchBar from 'components/SearchBar'
import WeatherResult from 'components/WeatherResult'

const Home = () => {
  return (
    <div className="p-4 md:pb-20">
      <div className="text-2xl md:text-4xl font-bold text-white text-center pb-3">
        Simple Weather Forecast App
      </div>
      <SearchBar />
      <WeatherResult />
    </div>
  )
}

export default Home
