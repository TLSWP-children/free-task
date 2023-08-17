import { FOLDER_TAG, TASK_TAG, baseApi } from '@/shared/api';
import { FolderItem } from '../model';
import { RequestCreateFolderBody } from './types';
import { mapFolder, mapFolderItem } from '../lib';

export const folderApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    folders: build.query<FolderItem[], void>({
      query: () => ({
        url: `/folders/`,
      }),
      providesTags: [FOLDER_TAG],
      transformResponse: mapFolder,
    }),
    folderById: build.query<FolderItem, string>({
      query: (id) => ({
        url: `/folders/${id}`,
      }),
      providesTags: [FOLDER_TAG],
      transformResponse: mapFolderItem,
    }),
    createFolder: build.mutation<FolderItem, RequestCreateFolderBody>({
      query: (body) => ({
        url: '/folders/',
        method: 'POST',
        body,
      }),
      invalidatesTags: [FOLDER_TAG],
    }),
    editFolder: build.mutation<FolderItem, FolderItem>({
      query: (body) => ({
        url: '/folders/',
        method: 'PATCH',
        body,
      }),
      invalidatesTags: [FOLDER_TAG],
    }),
    deleteFolder: build.mutation<FolderItem, string>({
      query: (id) => ({
        url: `/folders/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: [FOLDER_TAG, TASK_TAG],
    }),
  }),
});

export const {
  useFoldersQuery,
  useCreateFolderMutation,
  useEditFolderMutation,
  useFolderByIdQuery,
  useDeleteFolderMutation,
} = folderApi;
