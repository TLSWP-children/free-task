import { Code, TextInput } from '@mantine/core';
import { IconSearch } from '@tabler/icons-react';
import { useStyles } from './style';
import { useOs } from '@mantine/hooks';

const NavbarSearch = () => {
  const { classes } = useStyles();
  const os = useOs();
  const kbd = os === 'macos' ? 'Cmd + K' : 'Ctrl + K';
  return (
    <TextInput
      placeholder="Search"
      size="xs"
      icon={<IconSearch size="0.8rem" stroke={1.5} />}
      rightSectionWidth={70}
      rightSection={<Code className={classes.searchCode}>{kbd}</Code>}
      styles={{ rightSection: { pointerEvents: 'none' } }}
      mb="sm"
    />
  );
};

export default NavbarSearch;
