import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export  const Api = createApi({
    reducerPath: "getFavoritesTracksApi",
    tagTypes: ['Tracks'],
    baseQuery: fetchBaseQuery({baseUrl: 'https://skypro-music-api.skyeng.tech/catalog/track/favorite/all/'}),
    endpoints: (builder) => ({
      getFavoritesTracks: builder.query({
        query: () => 'favoriteTracks',
        providesTags: (result) =>
          result
            ? [...result.map(({ id }) => ({ type: 'Tracks', id })), 'Tracks']
            : ['Tracks'],
      }),
  
      addTrackFavorites: builder.mutation({
        query: ({ id, accessToken }) => ({
          url: `https://skypro-music-api.skyeng.tech/catalog/track/${id}/favorite/`,
          method: "POST",
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }),
        invalidatesTags: [{ type: 'Tracks', id: 'LIST' }],
      }),
  
      deleteTrackFavorites: builder.mutation({
        query: (id, accessToken) => ({
          url: `https://skypro-music-api.skyeng.tech/catalog/track/${id}/favorite/`,
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }),
        invalidatesTags: [{ type: 'Tracks', id: 'LIST'}],
      }),
    }),
  });

  export const { useGetFavoritesTracksQuery, useAddTrackFavoritesQuery, useDeleteTrackFavoritesMutation } = Api
  export default Api.reducer