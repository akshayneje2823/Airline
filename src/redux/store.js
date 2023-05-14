import { configureStore } from '@reduxjs/toolkit'
import AirlineReducer from './AirlineSlice'

export const store = configureStore({
    reducer:{
        Airline:AirlineReducer
    }
})