import { createApi } from '@reduxjs/toolkit/query/react';
import { baseQuery } from './baseQuery';
import { FOLDER_TAG, SESSION_TAG, TASK_TAG } from './tags';

export const baseApi = createApi({
  tagTypes: [SESSION_TAG, FOLDER_TAG, TASK_TAG],
  reducerPath: 'api',
  baseQuery: baseQuery,
  endpoints: () => ({}),
});
