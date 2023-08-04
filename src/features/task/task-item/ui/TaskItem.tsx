import { ITask } from '@/shared/model';
import { Checkbox, Flex, Input } from '@mantine/core';
import { useInputState } from '@mantine/hooks';
import { ChangeEventHandler, useEffect, useState } from 'react';
import { useStyles } from './style';

interface TaskItemProps {
  task: ITask;
}

const TaskItem = ({ task }: TaskItemProps) => {
  const { classes } = useStyles();
  const [value, setValue] = useInputState(task.title);
  const [isDone, setIsDone] = useState(task.isDone);
  const checkboxHandler: ChangeEventHandler<HTMLInputElement> = (e) => {
    setIsDone(e.target.checked);
  };
  useEffect(() => {
    setValue(task.title);
    // eslint-disable-next-line react-hooks/exhaustive-deps --- effect does not depend on setValue
  }, [task]);
  return (
    <Flex align="center">
      <Checkbox
        classNames={{ input: classes.checkbox }}
        checked={isDone}
        onChange={checkboxHandler}
        mr="0.5rem"
      />
      <Input
        classNames={{
          input: classes.input,
        }}
        disabled={isDone}
        value={value}
        onChange={setValue}
        w="60ch"
        variant="unstyled"
        placeholder="TO-DO"
      />
    </Flex>
  );
};

export default TaskItem;
