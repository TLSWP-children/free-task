export interface FolderItemDto {
  readonly id: string;
  title: string;
  emoji: string;
  createdAt: string;
  updatedAt: string;
}
export interface FolderDto {
  currentPage: number;
  total: number;
  totalPages: number;
  result: FolderItemDto[];
}
export interface RequestCreateFolderBody {
  title: string;
  emoji: string;
}
