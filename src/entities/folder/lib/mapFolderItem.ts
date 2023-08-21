import { type FolderItemDto } from '../api/';
import { type FolderItem } from '../model/';

export function mapFolderItem(dto: FolderItemDto): FolderItem {
  return {
    id: dto.id,
    emoji: dto.emoji,
    title: dto.title,
    totalTasks: dto.totalTasks,
    totalTasksIsDone: dto.totalTasksIsDone,
    totalTasksNotDone: dto.totalTasksNotDone,
  };
}
