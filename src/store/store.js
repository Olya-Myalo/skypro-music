import { configureStore } from "@reduxjs/toolkit"
import tracksReducer from './slices/trackSlice'
import authorizationReducer from './slices/authorizationSlice'
import {ApiFavorites } from './service/serviceFavorites'
import { authApi } from './service/apiLogin';

export const store = configureStore({
    reducer: {
        player: tracksReducer,
        authorization: authorizationReducer,
        [authApi.reducerPath]: authApi.reducer,
        [ApiFavorites.reducerPath]: ApiFavorites.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware, ApiFavorites.middleware),
});