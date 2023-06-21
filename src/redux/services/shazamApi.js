import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const shazamApi = createApi({
	reducerPath: 'shazamApi',
	baseQuery: fetchBaseQuery({
		baseUrl: 'https://shazam.p.rapidapi.com',
		prepareHeaders: (headers) => {
			headers.set(
				'X-RapidAPI-Key',
				'3de61c5a14msh7aba582ef8e8f98p1c294ajsnc3b4ce18798b'
			);
			return headers;
		},
	}),
	endpoints: (builder) => ({
		getTopGlobalCharts: builder.query({ query: () => 'charts/track' }),
		getGenreSongs: builder.query({
			query: (id) => {
				return {
					url: 'charts/track',
					params: id,
				};
			},
		}),
		getRecommendedSongs: builder.query({
			query: (listId) => {
				return {
					url: 'shazam-songs/list-similarities',
					params: listId,
				};
			},
		}),
		getGlobalGenres: builder.query({ query: () => 'charts/list' }),
	}),
});

export const {
	useGetTopGlobalChartsQuery,
	useGetGenreSongsQuery,
	useGetRecommendedSongsQuery,
	useGetGlobalGenresQuery,
} = shazamApi;
