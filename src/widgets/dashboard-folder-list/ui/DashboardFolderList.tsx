import { FolderPreview, useFoldersQuery } from '@/entities/folder';
import { Group, Stack, Title } from '@mantine/core';
import Link from 'next/link';

const DashboardFolderList = ({}) => {
  const { data: folderList, isSuccess } = useFoldersQuery();
  if (!isSuccess) return null;

  const folders = folderList.map(
    ({ id, emoji, title, totalTasks, totalTasksIsDone }) => (
      <Link style={{ textDecoration: 'none' }} key={id} href={`folder/${id}`}>
        <FolderPreview
          emoji={emoji}
          title={title}
          totalTasks={totalTasks}
          totalTasksIsDone={totalTasksIsDone}
        />
      </Link>
    )
  );
  return (
    <Stack>
      <Title>Folders</Title>
      <Group>{folders}</Group>
    </Stack>
  );
};

export { DashboardFolderList };
