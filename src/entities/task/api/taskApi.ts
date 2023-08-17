import { FOLDER_TAG, TASK_TAG, baseApi } from '@/shared/api';
import { TaskItem } from '../model';
import { mapTask } from '../lib';
import { RequestCreateTaskBody, RequestEditTaskBody } from '.';

export const taskApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    tasks: build.query<TaskItem[], string>({
      query: (id) => ({
        url: `/folders/${id}/tasks?limit=1000`,
      }),
      providesTags: [TASK_TAG],
      transformResponse: mapTask,
    }),
    taskById: build.query<TaskItem, string>({
      query: (id) => ({
        url: `/tasks/${id}`,
      }),
      providesTags: [TASK_TAG],
    }),
    createTask: build.mutation<TaskItem, RequestCreateTaskBody>({
      query: (body) => ({
        url: '/tasks/',
        method: 'POST',
        body,
      }),
      invalidatesTags: [TASK_TAG],
    }),
    editTask: build.mutation<TaskItem, RequestEditTaskBody>({
      query: (body) => ({
        url: '/tasks/',
        method: 'PATCH',
        body,
      }),
      invalidatesTags: [TASK_TAG],
    }),
    deleteTask: build.mutation<TaskItem, string>({
      query: (id) => ({
        url: `/tasks/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: [TASK_TAG],
    }),
  }),
});

export const {
  useTasksQuery,
  useCreateTaskMutation,
  useDeleteTaskMutation,
  useEditTaskMutation,
  useTaskByIdQuery,
} = taskApi;
