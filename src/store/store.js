import { configureStore } from "@reduxjs/toolkit";
import tracksReducer from './slices/trackSlice'

export const store = configureStore({
    reducer: {
        player: tracksReducer
    }
})