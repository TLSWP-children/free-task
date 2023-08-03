import { Input } from '@mantine/core';

const TaskInput = ({}) => {
  return (
    <Input
      styles={{
        input: {
          // fontWeight: 'bold',
        },
      }}
      variant="unstyled"
      placeholder="TO-DO"
    />
  );
};

export default TaskInput;
