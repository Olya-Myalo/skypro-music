import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export  const ApiFavorites = createApi({
  reducerPath: "favoriteTracksApi",
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
    getFavoriteTracks: builder.query({
      query: 'catalog/track/favorite/all/',
      providesTags: (result) =>
        result
          ? [...result.map(({ id }) => ({ type: 'Tracks', id })), 'Tracks']
          : ['Tracks'],
    }),

    addFavoriteTrack: builder.mutation({
      query: ({ id, accessToken }) => ({
        url: `https://skypro-music-api.skyeng.tech/catalog/track/${id}/favorite/`,
        method: "POST",
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }),
      invalidatesTags: [{ type: 'Tracks', id: 'LIST' }],
    }),

    deleteFavoriteTrack: builder.mutation({
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

  export const { useAddFavoriteTrackMutation, useGetFavoriteTracksQuery, useDeleteFavoriteTrackMutation } = ApiFavorites
  export default ApiFavorites.reducer