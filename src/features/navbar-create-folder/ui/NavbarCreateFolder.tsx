import { ActionIcon, Tooltip } from '@mantine/core';
import { IconPlus } from '@tabler/icons-react';

const NavbarCreateFolder = () => {
  return (
    <Tooltip label="Create folder" withArrow position="right">
      <ActionIcon variant="default" size={18}>
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
