import { ActionIcon, Tooltip } from '@mantine/core';
import { IconPlus } from '@tabler/icons-react';

const NavbarCreateFolder = () => {
  return (
    <Tooltip label="Create folder" withArrow position="right">
      <ActionIcon variant="default" size={18}>
        <IconPlus size="0.8rem" stroke={1.5} />
      </ActionIcon>
    </Tooltip>
  );
};

export default NavbarCreateFolder;
