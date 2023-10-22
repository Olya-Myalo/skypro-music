import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    track: null,
    playlist: [],
    playing: false,
    shufflePlaylist: [],
    favoritesTracks: []
}

export const tracksSlice = createSlice({
    name: 'tracks',
    initialState,
    reducers: {
        setPlaylist: ( state, action ) => {
            state.playlist = action.payload
        },
        setTrack: ( state, action ) => {
            state.playing = true;
            const id = action.payload;
            const currentTrack = state.playlist.find(track => track.id === id);
            state.track = currentTrack
        },
        setShufflePlaylist: (state, action) => {
            state.shufflePlaylist = action.payload
              },
        setFavoritesTracks: (state,action) => {
            state.favoritesTracks = action.payload
        },
        setPlaying: (state, action) => {
            state.playing = action.payload
        }
    }
})

export const { setPlaylist, setTrack, setShufflePlaylist, setFavoritesTracks, setPlaying } = tracksSlice.actions;

export default tracksSlice.reducer