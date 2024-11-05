import SearchBar from 'components/SearchBar'
import WeatherResult from 'components/WeatherResult'

const Home = () => {
  return (
    <div className="p-4">
      <div className="text-2xl md:text-4xl font-bold text-white text-center pb-3">
        SIMPLE WEATHER APP
      </div>
      <SearchBar />
      <WeatherResult />
    </div>
  )
}

export default Home
