import { baseApi, SESSION_TAG } from '@/shared/api';
import { User } from '../model';
import { UserDto } from './types';
import { mapUser } from '../lib';

export const sessionApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    me: build.query<User, void>({
      query: () => ({
        url: `/users/profile`,
      }),
      providesTags: [SESSION_TAG],
      transformResponse: (response: UserDto) => mapUser(response),
    }),
  }),
});

export const { useMeQuery } = sessionApi;
