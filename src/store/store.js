import { configureStore } from "@reduxjs/toolkit"
import tracksReducer from './slices/trackSlice'
import authorizationReducer from './slices/authorizationSlice'
import { Api } from './slices/serviceFavorites'

export const store = configureStore({
    reducer: {
        player: tracksReducer,
        authorization: authorizationReducer,
        [Api.reducerPath]: Api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(Api.middleware),
});