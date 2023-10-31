import { configureStore } from "@reduxjs/toolkit"
import tracksReducer from './slices/trackSlice'
import authorizationReducer from './slices/authorizationSlice'
import {ApiTracks } from './service/serviceTracks'
import { authApi } from './service/apiLogin';

export const store = configureStore({
    reducer: {
        player: tracksReducer,
        authorization: authorizationReducer,
        [authApi.reducerPath]: authApi.reducer,
        [ApiTracks.reducerPath]: ApiTracks.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware, ApiTracks.middleware),
});