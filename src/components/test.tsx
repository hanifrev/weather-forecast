import { render, screen, fireEvent } from '@testing-library/react'
import { Provider } from 'react-redux'
import SearchBar from './SearchBar'
import appSlice, { setQuery } from 'redux/appSlice'
import { configureStore } from '@reduxjs/toolkit'
import { weatherApi } from 'services/weatherApi'
import LoadingState from './LoadingState'
import App from './App'

const mockStore = configureStore({
  reducer: {
    [weatherApi.reducerPath]: weatherApi.reducer,
    appState: appSlice
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(weatherApi.middleware)
})

describe('<App />', () => {
  it('renders the App component with mock store', () => {
    render(
      <Provider store={mockStore}>
        <App />
      </Provider>
    )

    expect(screen.getByText(/Simple Weather Forecast App/i)).toBeInTheDocument()
  })
})

test('it should update input on typing', () => {
  render(
    <Provider store={mockStore}>
      <SearchBar />
    </Provider>
  )
  const input = screen.getByPlaceholderText(/Enter city name/i)
  fireEvent.change(input, { target: { value: 'New York' } })
  expect(input).toHaveValue('New York')
})

test('it should submit on Enter key press', () => {
  render(
    <Provider store={mockStore}>
      <SearchBar />
    </Provider>
  )
  const input = screen.getByPlaceholderText(/Enter city name/i)
  fireEvent.change(input, { target: { value: 'New York' } })
  fireEvent.keyDown(input, { key: 'Enter', code: 'Enter' })
})

test('displays loading state when fetching', () => {
  render(
    <Provider store={mockStore}>
      <LoadingState />
    </Provider>
  )
  expect(screen.getByText(/Loading/i)).toBeInTheDocument()
})
