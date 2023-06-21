import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const shazamApi = createApi({
  reducerPath: 'shazamApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://shazam.p.rapidapi.com',
    prepareHeaders: (headers) => {
      headers.set(
        'X-RapidAPI-Key',
        'aa70015474msh82fbff78b3d3c25p16f7eejsn6e459007e076'
      );
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getTopGlobalCharts: builder.query({ query: () => 'charts/track' }),
    getRecommendedSongs: builder.query({
      query: (id) => {
        return {
          url: 'shazam-songs/list-similarities',
          params: id,
        };
      },
    }),
  }),
});

export const { useGetTopGlobalChartsQuery, useGetRecommendedSongsQuery } =
  shazamApi;
