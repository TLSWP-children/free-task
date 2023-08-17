import { type FolderDto } from '../api/';
import { type FolderItem } from '../model/';

export function mapFolder(dto: FolderDto): FolderItem[] {
  return dto.result.map((item) => ({
    id: item.id,
    emoji: item.emoji,
    title: item.title,
  }));
}
