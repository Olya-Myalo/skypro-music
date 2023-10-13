import { configureStore } from "@reduxjs/toolkit"
import tracksReducer from './slices/trackSlice'
import authorizationReducer from './slices/authorizationSlice'
import getFavoritesTracksApi from './slices/serviceFavorites'

export const store = configureStore({
    reducer: {
        player: tracksReducer,
        authorization: authorizationReducer,
        [getFavoritesTracksApi.reducerPath]: getFavoritesTracksApi.reducer
    },
    // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(getFavoritesTracksApi.middleware)
})