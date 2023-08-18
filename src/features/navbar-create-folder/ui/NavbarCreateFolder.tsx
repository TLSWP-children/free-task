import { useCreateFolderMutation } from '@/entities/folder';
import { ActionIcon, Tooltip } from '@mantine/core';
import { IconPlus } from '@tabler/icons-react';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const NavbarCreateFolder = () => {
  const [createFolder, { isLoading, data, isSuccess }] =
    useCreateFolderMutation();
  const [isFirstPush, setIsFirstPush] = useState(true);
  const router = useRouter();

  useEffect(() => {
    if (isSuccess && data?.id && isFirstPush) {
      router.push({
        pathname: '/folder/[id]',
        query: { id: data.id },
      });
      setIsFirstPush(false);
    }
  }, [isSuccess, data, router]);
  return (
    <Tooltip label="Create folder" withArrow position="right">
      <ActionIcon
        onClick={() =>
          createFolder({
            title: 'New folder',
            emoji: '⏰',
          })
        }
        loading={isLoading}
        variant="default"
        size={18}
      >
        <IconPlus
          style={{
            transform: 'translate(-0.1px, -0.1px)',
          }}
          size="0.8rem"
          stroke={1.5}
        />
      </ActionIcon>
    </Tooltip>
  );
};

export default NavbarCreateFolder;
