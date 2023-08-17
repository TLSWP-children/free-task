import { useFolderByIdQuery } from '@/entities/folder';
import { TaskItem } from '@/entities/task/';
import { useTasksQuery } from '@/entities/task/api/taskApi';
import { FolderTitle } from '@/features/folder/folder-title';
import { SelectFolderIcon } from '@/features/folder/select-folder-icon';
import { CreateTask } from '@/features/task/create-task';
import { TaskItem as TaskItemTODO } from '@/features/task/task-item';
import TaskSettingsMenu from '@/features/task/task-settings-menu/ui/TaskSettingsMenu';
import { Center, Flex, Loader, Space, Stack } from '@mantine/core';
import { useRouter } from 'next/router';

const folderState = {
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
  const router = useRouter();
  const id = typeof router.query.id === 'string' ? router.query.id : '';

  const folder = useFolderByIdQuery(id);
  const task = useTasksQuery(id);
  if (task.isLoading)
    return (
      <Center h="80vh" py="200px">
        <Loader variant="dots" />
      </Center>
    );
  const taskList = task.isSuccess && task.data ? task.data : [];
  const tasks = taskList.map((task) => (
    <TaskItem key={task.id}>
      <TaskItemTODO folderID={id} task={task} />
      <TaskSettingsMenu id={task.id} />
    </TaskItem>
  ));
  return (
    <Center>
      <Stack maw="64ch" mt="xl" align="flex-start" justify="flex-start">
        <Flex align="center" gap="sm">
          {folder.isSuccess && (
            <>
              <SelectFolderIcon id={id} /> <FolderTitle id={id} />
            </>
          )}
        </Flex>
        <div>{tasks}</div>
        {<CreateTask id={id} />}
        <Space h="300px" />
      </Stack>
    </Center>
  );
};

export default Folder;
