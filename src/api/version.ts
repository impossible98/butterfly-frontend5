import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { BASE_URL } from '@/utils/constant';

export const versionApi = createApi({
  reducerPath: 'versionApi',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  endpoints: (builder) => ({
    getVersion: builder.query({
      query: () => ({
        url: '/api/version',
      }),
    }),
  }),
});

export const { useGetVersionQuery } = versionApi;
