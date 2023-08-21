export interface FolderItem {
  readonly id: string;
  title: string;
  emoji: string;
  totalTasks: number;
  totalTasksIsDone: number;
  totalTasksNotDone: number;
}
