import {
  Code,
  Group,
  Navbar as MantineNavbar,
  Text,
  TextInput,
} from '@mantine/core';
import { IconSearch } from '@tabler/icons-react';
import { useStyles } from './style';
import { ReactNode } from 'react';

interface NavbarProps {
  mainLinks: ReactNode;
  folderLinks: ReactNode;
  createFolderButton: ReactNode;
  search: ReactNode;
}

const Navbar = ({
  search,
  mainLinks,
  folderLinks,
  createFolderButton,
}: NavbarProps) => {
  const { classes } = useStyles();
  return (
    <MantineNavbar
      height={700}
      width={{ sm: 300 }}
      p="md"
      className={classes.navbar}
    >
      {search}
      <MantineNavbar.Section className={classes.section}>
        <div className={classes.mainLinks}>{mainLinks}</div>
      </MantineNavbar.Section>

      <MantineNavbar.Section className={classes.section}>
        <Group className={classes.foldersHeader} position="apart">
          <Text size="xs" weight={500} color="dimmed">
            Folders
          </Text>
          {createFolderButton}
        </Group>
        <div className={classes.folders}>{folderLinks}</div>
      </MantineNavbar.Section>
    </MantineNavbar>
  );
};

export default Navbar;
