export interface TaskItemDto {
  readonly id: string;
  title: string;
  position: string;
  isDone: boolean;
  createdAt: string;
  updatedAt: string;
}
export interface TaskDto {
  currentPage: number;
  total: number;
  totalPages: number;
  result: TaskItemDto[];
}

// export interface RequestTasksBody {
//     id: string;
//     page?: number;
//     limit?: number;
//     filters?:
// }

export interface RequestCreateTaskBody {
  title: string;
  folder: string;
}
export interface RequestEditTaskBody {
  title: string;
  isDone: boolean;
  id: string;
}
