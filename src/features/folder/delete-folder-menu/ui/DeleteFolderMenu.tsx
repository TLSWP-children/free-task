import { ActionIcon, Menu } from '@mantine/core';
import { IconTrash } from '@tabler/icons-react';
import { useStyles } from './style';
import { useDeleteFolderMutation } from '@/entities/folder';
import { useRouter } from 'next/router';
import { MouseEventHandler } from 'react';

interface DeleteFolderMenuProps {
  id: string;
}

const DeleteFolderMenu = ({ id }: DeleteFolderMenuProps) => {
  const router = useRouter();
  const [deleteTask] = useDeleteFolderMutation();
  const { classes } = useStyles();
  const deleteHandler: MouseEventHandler<HTMLButtonElement> = () => {
    deleteTask(id);
    const routerId = router.query.id;
    console.log(routerId, id);
    if (routerId && routerId === id) {
      router.push('/');
    }
  };
  return (
    <Menu shadow="md" width={200}>
      <Menu.Target>
        <ActionIcon style={{ zIndex: 10 }} size="xs" className={classes.icon}>
          <IconTrash />
        </ActionIcon>
      </Menu.Target>

      <Menu.Dropdown>
        <Menu.Item
          onClick={deleteHandler}
          color="red"
          icon={<IconTrash size={14} />}
        >
          Delete folder
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
};

export default DeleteFolderMenu;
