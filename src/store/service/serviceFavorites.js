import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const playlistApi = createApi({
  reducerPath: "playlistApi",
  tagTypes: ['Tracks'],
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://skypro-music-api.skyeng.tech/',
    prepareHeaders: (headers, { getState }) => {
      console.log(getState())
      const token = getState().authorization.access
      if (token) {
        headers.set('authorization', 'Bearer ' + token);
      } 
      return headers;
    }
  }),

  endpoints: (builder) => ({
    getMainPlaylist: builder.query({
      query: () => "/catalog/track/all/",
    }),

    getFavoriteTracks: builder.query({
      query: () => ({ url: 'catalog/track/favorite/all/' }),
      providesTags: ['Tracks'],
    }),

    addFavoriteTrack: builder.mutation({
      query: ({ id }) => ({
        url: `catalog/track/${id}/favorite/`,
        method: "POST",
      }),
      invalidatesTags: [{ type: 'Tracks'}],
    }),

    deleteFavoriteTrack: builder.mutation({
      query: (id) => ({
        url: `catalog/track/${id}/favorite/`,
        method: "DELETE",
      }),
      invalidatesTags: [{ type: 'Tracks'}],
    }),
  })
})

export const { useGetMainPlaylistQuery, useAddFavoriteTrackMutation, useGetFavoriteTracksQuery, useDeleteFavoriteTrackMutation } = playlistApi
export default playlistApi.reducer