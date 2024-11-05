import { HumidIcon, RainIcon, TempIcon, UVLogo, WindLogo } from 'assets'
import { useSelector } from 'react-redux'
import { RootState } from 'redux/store'
import { dateConverter, formatDate } from 'utils/dateConverter'

interface CardProps {
  item: WeatherForcast
  index: number
}

const CardWeather: React.FC<CardProps> = ({ item, index }) => {
  const dataLoading = useSelector(
    (state: RootState) => state.appState.loadingData
  )

  return (
    <div
      key={index}
      className={`flex flex-col border border-slate-400 rounded-xl p-2 bg-primary bg-opacity-30  ${
        dataLoading && 'animate-pulse'
      }`}
    >
      <div
        className={`mx-auto font-semibold text-sm pb-3 ${
          dataLoading && 'text-primary text-opacity-30'
        }`}
      >
        {dateConverter(item.fxDate)} {formatDate(item.fxDate)}
      </div>
      <div className={`${dataLoading && 'text-primary text-opacity-30'}`}>
        <div className="flex flex-col gap-4 items-center pb-3">
          <i className={`qi-${item.iconDay} text-8xl`} />
          <span className="text-sm">{item.textDay}</span>
          <span className="flex flex-row items-center text-sm">
            H: {item.tempMax}°C | L: {item.tempMin}°C
          </span>
        </div>
        <div className="flex flex-row flex-wrap justify-evenly gap-y-5 w-[315px] mx-auto">
          <div className="flex flex-row items-center gap-1 w-[114px]">
            <span>
              <img src={HumidIcon} alt="icon" className="w-[30px]" />{' '}
            </span>
            <span className="leading-none">
              <span className="flex flex-col text-sm">{item.humidity}%</span>
              <span className="text-xs font-medium">Humidity</span>
            </span>
          </div>

          <div className="flex flex-row items-center gap-1 w-[114px]">
            <span>
              <img src={RainIcon} alt="icon" className="w-[30px]" />{' '}
            </span>
            <span className="leading-none">
              <span className="flex flex-col text-sm">{item.precip}mm</span>
              <span className="text-xs font-medium">Precipitation</span>
            </span>
          </div>

          <div className="flex flex-row items-center gap-1 w-[114px]">
            <span>
              <img src={WindLogo} alt="icon" className="w-[30px]" />{' '}
            </span>
            <span className="leading-none">
              <span className="flex flex-col text-sm">
                {item.windSpeedDay} km/h
              </span>
              <span className="text-xs font-medium">Wind Speed</span>
            </span>
          </div>

          <div className="flex flex-row items-center gap-1 w-[114px]">
            <span>
              <img src={UVLogo} alt="icon" className="w-[30px]" />{' '}
            </span>
            <span className="leading-none">
              <span className="flex flex-col text-sm">{item.uvIndex}</span>
              <span className="text-xs font-medium">UV Index</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CardWeather
