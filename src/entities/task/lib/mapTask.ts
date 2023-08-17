import { type TaskDto } from '../api/';
import { type TaskItem } from '../model/';

export function mapTask(dto: TaskDto): TaskItem[] {
  return dto.result.map((item) => ({
    isDone: item.isDone,
    id: item.id,
    title: item.title,
  }));
}
