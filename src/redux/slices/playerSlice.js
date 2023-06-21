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
		},

		setIsPlaying: (state, action) => {
			state.isPlaying = action.payload;
		},

		setCurrentSongs: (state, action) => {
			state.currentSongs = action.payload;
		},

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
	setCurrentSongs,
	// 	nextSong,
	// 	prevSong,
	// 	selectGenreListId,
} = playerSlice.actions;

export default playerSlice.reducer;
