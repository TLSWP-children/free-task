import { FolderState } from '@/entities/folder';
import { FolderTitle } from '@/features/folder/folder-title';
import { TaskItem } from '@/features/task/task-item';
import { Center, InputBase, Stack } from '@mantine/core';

const folderState: FolderState = {
  id: '1',
  title: 'Планы на день',
  tasks: [
    {
      id: '0',
      isDone: false,
      title: 'Зарядка',
    },
    {
      id: '1',
      isDone: false,
      title: 'Завтрак',
    },
    {
      id: '2',
      isDone: true,
      title: 'Сон',
    },
  ],
};

const Folder = () => {
  const tasks = folderState.tasks.map((task) => (
    <TaskItem task={task} key={task.id} />
  ));
  return (
    <Center>
      <Stack maw="64ch" mt="xl" align="flex-start" justify="flex-start">
        <FolderTitle folder={folderState} />
        <div>{tasks}</div>
      </Stack>
    </Center>
  );
};

export default Folder;
