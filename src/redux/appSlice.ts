import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface appState {
  query: string
  searchLoading: WeatherForecast | null
  loadingData: boolean
}

const initialState: appState = {
  query: '',
  searchLoading: null,
  loadingData: false
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
    },
    setLoadingData: (state, action: PayloadAction<boolean>) => {
      state.loadingData = action.payload
    }
  }
})

export const { setQuery, setSearchLoading, setLoadingData } = appSlice.actions
export default appSlice.reducer
