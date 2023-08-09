import { baseApi, SESSION_TAG } from '@/shared/api';
import { RequestLoginBody, RequestRegisterBody, SessionDto } from './types';
import { Session } from '../model/types';
import { mapSession } from '../lib';

export const sessionApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    login: build.mutation<Session, RequestLoginBody>({
      query: (body) => ({
        url: `/auth/login`,
        method: 'POST',
        body,
      }),
      invalidatesTags: [SESSION_TAG],
      transformResponse: (response: SessionDto) => mapSession(response),
    }),
    register: build.mutation<Session, RequestRegisterBody>({
      query: (body) => ({
        url: `/auth/register`,
        method: 'POST',
        body,
      }),
      invalidatesTags: [SESSION_TAG],
      transformResponse: (response: SessionDto) => mapSession(response),
    }),
  }),
});

export const { useLoginMutation, useRegisterMutation } = sessionApi;
