import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export  const ApiTracks = createApi({
  reducerPath: "tracksApi",
  tagTypes: ['Tracks'],
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://skypro-music-api.skyeng.tech/',
    prepareHeaders: (headers, { getState }) => {
      console.log(getState())
      const token = getState().authorization.access
      if (token) {
        headers.set('authorization', `Bearer ${token}`);
      } 
      return headers;
    }
  }),
  endpoints: (builder) => ({
    getTracks: builder.query({
      query: () => ({ url: `catalog/track/all/` }),
      providesTags: ['Tracks'],
    }),
    getFavoriteTracks: builder.query({
      query: () => ({ url: `catalog/track/favorite/all/` }),
      providesTags: ['Tracks'],
    }),
    addFavoriteTrack: builder.mutation({
      query: ({ id }) => ({
        url: `catalog/track/${id}/favorite/`,
        method: "POST",
      }),
      invalidatesTags: ['Tracks'],
    }),
    deleteFavoriteTrack: builder.mutation({
      query: (id) => ({
        url: `catalog/track/${id}/favorite/`,
        method: "DELETE",
      }),
      invalidatesTags: ['Tracks'],
    }),
    getCatalogSection: builder.query({
      query: () => ({
        url: '/catalog/selection/',
        providesTags: ['Tracks'],
      }),
    }),
    getCatalogSectionTracks: builder.query({
      query: (id) => ({
        url: `/catalog/selection/${id}`,
        providesTags: ['Tracks'],
      }),
    }),
})
});

  export const {useGetTracksQuery, useGetFavoriteTracksQuery, useAddFavoriteTrackMutation, 
    useDeleteFavoriteTrackMutation, useGetCatalogSectionQuery, useGetCatalogSectionTracksQuery } = ApiTracks
  export default ApiTracks.reducer