import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface appState {
  query: string
  searchLoading: WeatherForecast | null
}

const initialState: appState = {
  query: '',
  searchLoading: null
}

const appSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setQuery: (state, action: PayloadAction<string>) => {
      state.query = action.payload
    },
    setSearchLoading: (
      state,
      action: PayloadAction<WeatherForecast | null>
    ) => {
      state.searchLoading = action.payload
    }
  }
})

export const { setQuery, setSearchLoading } = appSlice.actions
export default appSlice.reducer
