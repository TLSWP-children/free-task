import { Card, Group, Text } from '@mantine/core';

interface FolderPreviewProps {
  emoji: string;
  title: string;
  totalTasks: number;
  totalTasksIsDone: number;
}

const FolderPreview = ({
  emoji,
  title,
  totalTasks,
  totalTasksIsDone,
}: FolderPreviewProps) => {
  return (
    <Card w="250px" withBorder>
      <Group noWrap spacing="md" position="left">
        <Text size="36px">{emoji}</Text>
        <div>
          <Text
            style={{
              whiteSpace: 'nowrap',
            }}
            size="md"
          >
            {title}
          </Text>
          <Text size="xs" color="gray">
            {totalTasks}/{totalTasksIsDone}
          </Text>
        </div>
      </Group>
    </Card>
  );
};

export { FolderPreview };
