import { configureStore } from "@reduxjs/toolkit"
import tracksReducer from './slices/trackSlice'
import authorizationReducer from './slices/authorizationSlice'

export const store = configureStore({
    reducer: {
        player: tracksReducer,
        authorization: authorizationReducer
    }
    // middleware:
})