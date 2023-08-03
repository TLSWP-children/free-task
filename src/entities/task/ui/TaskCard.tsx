import {
  Box,
  Card,
  Center,
  Checkbox,
  Flex,
  Input,
  Paper,
  Textarea,
} from '@mantine/core';
import { useHover } from '@mantine/hooks';
import { ReactNode } from 'react';

interface TaskCardProps {
  drag: ReactNode;
  checkbox: ReactNode;
  input: ReactNode;
}

const TaskCard = ({ drag }: TaskCardProps) => {
  const { ref, hovered } = useHover();
  return (
    <Flex ref={ref} align="center">
      {drag}
      <Center miw="30px">
        <svg
          cursor="grab"
          opacity={hovered ? '0.3' : '0'}
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          stroke-width="2"
          stroke="currentColor"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
          <path d="M9 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
          <path d="M9 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
          <path d="M9 19m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
          <path d="M15 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
          <path d="M15 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
          <path d="M15 19m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
        </svg>
      </Center>
      <Checkbox mr="0.5rem" />
      <Input
        styles={{
          input: {
            // fontWeight: 'bold',
          },
        }}
        variant="unstyled"
        placeholder="TO-DO"
      />
    </Flex>
  );
};

export default TaskCard;
