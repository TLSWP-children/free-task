import { useCreateTaskMutation } from '@/entities/task/api/taskApi';
import { ActionIcon } from '@mantine/core';
import { IconPlus } from '@tabler/icons-react';

interface CreateTaskProps {
  id: string;
}

const CreateTask = ({ id }: CreateTaskProps) => {
  const [create] = useCreateTaskMutation();

  return (
    <ActionIcon
      onClick={() =>
        create({
          folder: id,
          title: '',
        })
      }
      py="15px"
      w="64ch"
    >
      <IconPlus />
    </ActionIcon>
  );
};

export { CreateTask };
