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
                // function shuffleArray(array) {
                //     const newArray = [...array];
                // for (let i = newArray.length - 1; i > 0; i--) {
                //     const j = Math.floor(Math.random() * (i + 1));
                //     const temp = newArray[i];
                //     newArray[i] = newArray[j];
                //     newArray[j] = temp;
                //   }
                //   return newArray;
                // }
                // const currentPlaylist = action.payload;
                // state.shufflePlaylist = shuffleArray(currentPlaylist);
              },
    }
})

export const { setPlaylist, setTrack, setShufflePlaylist } = tracksSlice.actions;

export default tracksSlice.reducer