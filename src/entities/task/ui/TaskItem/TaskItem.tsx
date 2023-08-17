import { Flex } from '@mantine/core';
import { useStyles } from './style';
import { ReactNode } from 'react';

interface TaskItemProps {
  children: ReactNode;
}

const TaskItem = ({ children }: TaskItemProps) => {
  const { classes, cx } = useStyles();
  return (
    <Flex className={cx(classes.wrapper, 'task-wrapper')}>{children}</Flex>
  );
};

export { TaskItem };
