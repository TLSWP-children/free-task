import { baseApi, SESSION_TAG } from '@/shared/api';

export const sessionApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    login: build.mutation<object, object>({
      query: (body) => ({
        url: `/login`,
        method: 'POST',
        body,
      }),
      invalidatesTags: [SESSION_TAG],
    }),
    // TODO: FSD: Move to entities/user/api/userApi.ts
    me: build.query<object, void>({
      query: () => ({
        url: `/me`,
      }),
      providesTags: [SESSION_TAG],
    }),
  }),
});

export const { useLoginMutation, useMeQuery } = sessionApi;
