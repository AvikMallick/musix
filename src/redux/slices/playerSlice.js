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
	searchResult: { undefined },
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

		setSearchResult: (state, action) => {
			state.searchResult = action.payload;
		},
	},
});

export const { setActiveSong, setIsPlaying, setCurrentSongs, setSearchResult } =
	playerSlice.actions;

export default playerSlice.reducer;
