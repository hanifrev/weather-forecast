import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const GEOAPI_SUBDOMAIN = import.meta.env.VITE_GEOAPI_SUB
const DEVAPI_SUBDOMAIN = import.meta.env.VITE_DEVAPI_SUB
const BASE_DOMAIN = import.meta.env.VITE_BASE_URL
const API_KEY = import.meta.env.VITE_API_KEY

export const weatherApi = createApi({
  reducerPath: 'weatherApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `https://${GEOAPI_SUBDOMAIN}.${BASE_DOMAIN}/`
  }),
  endpoints: (builder) => ({
    getCityByName: builder.query<CityResponse, string>({
      query: (city) => `v2/city/lookup?location=${city}&key=${API_KEY}`
    }),
    getWeatherByCityId: builder.query<WeatherForecast, string>({
      query: (cityId) =>
        `https://${DEVAPI_SUBDOMAIN}.${BASE_DOMAIN}/v7/weather/7d?location=${cityId}&key=${API_KEY}`
    })
  })
})

export const { useGetCityByNameQuery, useGetWeatherByCityIdQuery } = weatherApi
