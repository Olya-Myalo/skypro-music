
export const trackSelector = (store) =>  store.player.tracks;

export const playlistSelector = (state) => state.player.playlist

export const shufflePlaylistSelector = (state) => state.player.shufflePlaylist

export const isTrackPlaySelector = (state) => state.player.playing