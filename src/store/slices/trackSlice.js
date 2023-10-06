import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    track: null,
    playlist: [],
    playing: false,
    shufflePlaylist: [],
}

export const tracksSlice = createSlice({
    name: 'tracks',
    initialState,
    reducers: {
        setPlaylist: ( state, action ) => {
            state.playing = true,
            state.playlist = action.payload
        },
        setTrack: ( state, action ) => {
            const id = action.payload;
            const currentTrack = state.playlist.find(track => track.id === id);
            state.track = currentTrack
        },
        setShufflePlaylist: (state, action) => {
            state.shufflePlaylist = action.payload
          },
    }
})

export const { setPlaylist, setTrack, setShufflePlaylist } = tracksSlice.actions;

export default tracksSlice.reducer