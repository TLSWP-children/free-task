import { ITask } from '@/shared/model';

export interface FolderState {
  readonly id: string;
  title: string;
  tasks: ITask[];
}
export interface FolderShortState {
  readonly id: string;
  title: string;
}
