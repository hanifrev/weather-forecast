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
    }, 500)

    return () => {
      clearTimeout(handler)
    }
  }, [inputValue])

  const handleSearch = () => {
    dispatch(setQuery(debouncedQuery))
  }

  const handleEnterKey = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSearch()
    }
  }

  const isWeatherDataExist = useSelector(
    (state: RootState) => state.appState.searchLoading
  )

  return (
    <div
      className={`flex flex-col md:flex-row items-center justify-center md:p-4 gap-2 mb-4 transition-all duration-300 overflow-hidden h-screen ${
        isWeatherDataExist ? 'max-h-[16vh]' : 'max-h-[70vh]'
      } `}
    >
      <input
        type="text"
        className="border rounded p-1.5 md:p-2 w-full max-w-[448px] md:max-w-64"
        placeholder="Enter city name"
        value={inputValue}
        onKeyDown={handleEnterKey}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button
        onClick={handleSearch}
        className="p-1.5 md:p-2 bg-primary hover:bg-accent cursor-pointer text-white rounded w-full max-w-[448px] md:max-w-24 font-medium border border-secondary"
      >
        Search
      </button>
    </div>
  )
}

export default SearchBar
