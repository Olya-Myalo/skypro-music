import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    track: null,
    playlist: [],
    playing: false,
    shufflePlaylist: [],
    favoritesTracks: [],
    filteredTracks: [],
    authors: [],
    genres: [],
}

export const tracksSlice = createSlice({
    name: 'tracks',
    initialState,
    reducers: {
        setPlaylist: ( state, action ) => {
            state.playlist = action.payload;
        },
        setFilters: (state, action) => {
            if(!action.payload) return
            state.genres = action.payload.filter(
                (obj, index, self) =>
                  index === self.findIndex((el) => el.genre === obj.genre)
              ).map((track) => ({checked: false, genre: track.genre}));
        
             state.authors = action.payload.filter(
                (obj, index, self) =>
                  index === self.findIndex((el) => el.author === obj.author)
              ).map((track) => ({checked: false, author: track.author}));
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
        },
        // setAuthorsArray: (state, action) => {
        //     state.track.authors.push(action.payload);
        // },
        // deleteAuthorsArray: (state, action) => {
        //     state.track.authors = state.authors.filter(
        //       (author) => author !== action.payload
        //     );
        // },
        // setGenresArray: (state, action) => {
        //     state.track.genres.push(action.payload);
        // },
        // deleteGenresArray: (state, action) => {
        //     state.track.genres = state.genres.filter(
        //       (genre) => genre !== action.payload
        //     );
        // }
    }
})

export const { setPlaylist, setFilters, setTrack, setShufflePlaylist, setFavoritesTracks, 
    setPlaying } = tracksSlice.actions;

export default tracksSlice.reducer