import { Box, Group, Navbar as MantineNavbar, Text } from '@mantine/core';
import { useStyles } from './style';
import { ReactNode } from 'react';

interface NavbarProps {
  mainLinks: ReactNode;
  folderLinks: ReactNode;
  createFolderButton: ReactNode;
  search: ReactNode;
  user: ReactNode;
}

const Navbar = ({
  search,
  mainLinks,
  folderLinks,
  createFolderButton,
  user,
}: NavbarProps) => {
  const { classes } = useStyles();
  return (
    <MantineNavbar width={{ sm: 300 }} p="md" className={classes.navbar}>
      {search}
      <MantineNavbar.Section className={classes.section}>
        <div className={classes.mainLinks}>{mainLinks}</div>
      </MantineNavbar.Section>

      <MantineNavbar.Section
        sx={{
          borderBottom: 'none !important',
        }}
        className={classes.section}
      >
        <Group className={classes.foldersHeader} position="apart">
          <Text size="xs" weight={500} color="dimmed">
            Folders
          </Text>
          {createFolderButton}
        </Group>
        <div className={classes.folders}>{folderLinks}</div>
      </MantineNavbar.Section>
      <Box mt="auto">{user}</Box>
    </MantineNavbar>
  );
};

export default Navbar;
