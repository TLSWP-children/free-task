import { useCreateTaskMutation } from '@/entities/task/api/taskApi';
import { Text, UnstyledButton } from '@mantine/core';
import { useRouter } from 'next/router';

interface CreateFirstTaskProps {
  id: string;
}

const CreateFirstTask = ({ id }: CreateFirstTaskProps) => {
  const [create] = useCreateTaskMutation();

  return (
    <UnstyledButton
      onClick={() =>
        create({
          title: 'Your first task!',
          folder: id,
        })
      }
    >
      <Text ml="sm">The task list is empty ☹️, create the first task</Text>
    </UnstyledButton>
  );
};

export { CreateFirstTask };
