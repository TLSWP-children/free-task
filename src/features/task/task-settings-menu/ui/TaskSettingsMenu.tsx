import { ActionIcon, Button, Menu, Text } from '@mantine/core';
import {
  IconArrowsLeftRight,
  IconDotsVertical,
  IconMessageCircle,
  IconPhoto,
  IconSearch,
  IconSettings,
  IconTrash,
} from '@tabler/icons-react';

interface TaskSettingsMenuProps {
  id: string;
}

const TaskSettingsMenu = ({ id }: TaskSettingsMenuProps) => {
  return (
    <Menu shadow="md" width={200}>
      <Menu.Target>
        <ActionIcon>
          <IconDotsVertical />
        </ActionIcon>
      </Menu.Target>

      <Menu.Dropdown>
        <Menu.Label>Application</Menu.Label>
        {/* <Menu.Item icon={<IconSettings size={14} />}>Settings</Menu.Item>
        <Menu.Item icon={<IconMessageCircle size={14} />}>Messages</Menu.Item>
        <Menu.Item icon={<IconPhoto size={14} />}>Gallery</Menu.Item>
        <Menu.Item
          icon={<IconSearch size={14} />}
          rightSection={
            <Text size="xs" color="dimmed">
              ⌘K
            </Text>
          }
        >
          Search
        </Menu.Item>

        <Menu.Divider />

        <Menu.Label>Danger zone</Menu.Label> */}
        <Menu.Item icon={<IconArrowsLeftRight size={14} />}>
          Transfer to
        </Menu.Item>
        <Menu.Item color="red" icon={<IconTrash size={14} />}>
          Delete task
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
};

export default TaskSettingsMenu;
