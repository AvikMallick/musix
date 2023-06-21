import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentSongs: [],
  currentIndex: 0,
  isActive: false,
  isPlaying: false,
  activeSong: {
    key: '',
    id: '',
    title: '',
    subtitle: '',
    artist: '',
    songUrl: '',
    songImage: '',
  },
};

const playerSlice = createSlice({
  name: 'player',
  initialState,
  reducers: {
    setActiveSong: (state, action) => {
      state.activeSong = action.payload;
      // state.isPlaying = true;
      // console.log(state.activeSong);
    },

    setIsPlaying: (state, action) => {
      state.isPlaying = action.payload;
      // console.log(state.isPlaying);
    },

    // 	setActiveSong: (state, action) => {
    // 		state.activeSong = action.payload.song;
    // 		if (action.payload?.data?.tracks?.hits) {
    // 			state.currentSongs = action.payload.data.tracks.hits;
    // 		} else if (action.payload?.data?.properties) {
    // 			state.currentSongs = action.payload?.data?.tracks;
    // 		} else {
    // 			state.currentSongs = action.payload.data;
    // 		}
    // 		state.currentIndex = action.payload.i;
    // 		state.isActive = true;
    // 	},
    // 	nextSong: (state, action) => {
    // 		if (state.currentSongs[action.payload]?.track) {
    // 			state.activeSong = state.currentSongs[action.payload]?.track;
    // 		} else {
    // 			state.activeSong = state.currentSongs[action.payload];
    // 		}
    // 		state.currentIndex = action.payload;
    // 		state.isActive = true;
    // 	},
    // 	prevSong: (state, action) => {
    // 		if (state.currentSongs[action.payload]?.track) {
    // 			state.activeSong = state.currentSongs[action.payload]?.track;
    // 		} else {
    // 			state.activeSong = state.currentSongs[action.payload];
    // 		}
    // 		state.currentIndex = action.payload;
    // 		state.isActive = true;
    // 	},
    //
    // 	selectGenreListId: (state, action) => {
    // 		state.genreListId = action.payload;
    // 	},
  },
});

export const {
  setActiveSong,
  setIsPlaying,
  // 	nextSong,
  // 	prevSong,
  // 	selectGenreListId,
} = playerSlice.actions;

export default playerSlice.reducer;
