import { ITask } from '@/shared/model';
import { Checkbox, Flex, Input, Textarea } from '@mantine/core';
import { useInputState } from '@mantine/hooks';
import {
  ChangeEventHandler,
  KeyboardEventHandler,
  useEffect,
  useState,
} from 'react';
import { useStyles } from './style';
import {
  useCreateTaskMutation,
  useEditTaskMutation,
} from '@/entities/task/api/taskApi';

interface TaskItemProps {
  task: ITask;
  folderID: string;
}

const TaskItem = ({ task, folderID }: TaskItemProps) => {
  const { classes } = useStyles();
  const [editTask] = useEditTaskMutation();
  const [createTask] = useCreateTaskMutation();

  const [value, setValue] = useInputState(task.title);
  const [isDone, setIsDone] = useState(task.isDone);

  const keydownHandler: KeyboardEventHandler<HTMLTextAreaElement> = (e) => {
    const shift = e.shiftKey;
    const alt = e.altKey;
    const meta = e.metaKey;
    const ctrl = e.ctrlKey;
    // if (e.code === 'Enter' && !shift) {
    //   createTask({
    //     folder: folderID,
    //     title: '',
    //   });
    // }
  };

  const checkboxHandler: ChangeEventHandler<HTMLInputElement> = (e) => {
    setIsDone(e.target.checked);
    editTask({
      ...task,
      isDone: e.target.checked,
    });
  };
  useEffect(() => {
    setValue(task.title);
    // eslint-disable-next-line react-hooks/exhaustive-deps --- effect does not depend on setValue
  }, [task]);
  return (
    <>
      <Checkbox
        mt="0.675rem"
        classNames={{ input: classes.checkbox }}
        checked={isDone}
        onChange={checkboxHandler}
        mr="0.5rem"
      />
      <Textarea
        autosize
        classNames={{
          input: classes.input,
        }}
        onKeyDown={keydownHandler}
        disabled={isDone}
        value={value}
        onBlur={() => editTask({ ...task, title: value })}
        onChange={setValue}
        w="60ch"
        variant="unstyled"
        placeholder="TO-DO"
      />
    </>
  );
};

export default TaskItem;
