import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const shazamApi = createApi({
	reducerPath: 'shazamApi',
	baseQuery: fetchBaseQuery({
		baseUrl: 'https://shazam.p.rapidapi.com',
		prepareHeaders: (headers) => {
			headers.set(
				'X-RapidAPI-Key',
				'5357eeba0fmsh24f7fd2aea35226p15ffcfjsn2a2ebccb844a'
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

		getSearchResult: builder.query({
			query: (term) => {
				return {
					url: 'search',
					params: term,
				};
			},
		}),
	}),
});

export const {
	useGetTopGlobalChartsQuery,
	useGetGenreSongsQuery,
	useGetRecommendedSongsQuery,
	useGetGlobalGenresQuery,
	useGetSearchResultQuery,
} = shazamApi;
