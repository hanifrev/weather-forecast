import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setQuery } from 'redux/appSlice'
import { RootState } from 'redux/store'

const SearchBar = () => {
  const dispatch = useDispatch()
  const [inputValue, setInputValue] = useState('')
  const [debouncedQuery, setDebouncedQuery] = useState('')

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedQuery(inputValue)
    }, 500) // 500ms debounce

    return () => {
      clearTimeout(handler)
    }
  }, [inputValue])

  const handleSearch = () => {
    dispatch(setQuery(debouncedQuery))
  }

  const isWeatherDataExist = useSelector(
    (state: RootState) => state.appState.searchLoading
  )

  return (
    <div
      className={`flex flex-col md:flex-row items-center justify-center md:p-4 gap-2 mb-4 transition-all duration-300 overflow-hidden h-screen ${
        isWeatherDataExist ? 'max-h-[10vh]' : 'max-h-[70vh]'
      } `}
    >
      <input
        type="text"
        className="border rounded p-1.5 md:p-2 w-full sm:max-w-60 md:max-w-64"
        placeholder="Enter city name"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button
        onClick={handleSearch}
        className="p-1.5 md:p-2 bg-primary hover:bg-accent focus:bg-light cursor-pointer text-white rounded w-full sm:max-w-60 md:max-w-24 font-medium border border-secondary"
      >
        Search
      </button>
    </div>
  )
}

export default SearchBar
