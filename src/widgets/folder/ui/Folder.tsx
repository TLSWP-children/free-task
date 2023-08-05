import { FolderState } from '@/entities/folder';
import { FolderTitle } from '@/features/folder/folder-title';
import { SelectFolderIcon } from '@/features/folder/select-folder-icon';
import { TaskItem } from '@/features/task/task-item';
import TaskSettingsMenu from '@/features/task/task-settings-menu/ui/TaskSettingsMenu';
import { Center, Flex, Stack } from '@mantine/core';

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
    <Flex key={task.id}>
      <TaskItem task={task} />
      <TaskSettingsMenu id={task.id} />
    </Flex>
  ));
  return (
    <Center>
      <Stack maw="64ch" mt="xl" align="flex-start" justify="flex-start">
        <Flex align="center" gap="sm">
          <SelectFolderIcon /> <FolderTitle folder={folderState} />
        </Flex>
        <div>{tasks}</div>
      </Stack>
    </Center>
  );
};

export default Folder;
