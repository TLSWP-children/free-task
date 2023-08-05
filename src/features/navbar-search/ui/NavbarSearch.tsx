import { Autocomplete, Code, FocusTrap, TextInput } from '@mantine/core';
import { IconSearch } from '@tabler/icons-react';
import { useStyles } from './style';
import { getHotkeyHandler, useDisclosure, useOs } from '@mantine/hooks';
import { useEffect, useRef } from 'react';

const NavbarSearch = () => {
  const { classes } = useStyles();
  const [active, { open, close }] = useDisclosure(false);
  const os = useOs();
  const kbd = os === 'macos' ? '⌘ + K' : 'Ctrl + K'; //⌘

  useEffect(() => {
    const onKeyDown = getHotkeyHandler([['mod+K', open]]);
    document.body.addEventListener('keydown', onKeyDown);

    return () => document.body.removeEventListener('keydown', onKeyDown);
  }, [open]);
  return (
    <FocusTrap active={active}>
      <Autocomplete
        onBlur={close}
        data={[
          'Sales',
          'Deliveries',
          'Discounts',
          'Profits',
          'Reports',
          'Orders',
          'Events',
          'Debts',
          'Customers',
        ]}
        placeholder="Search"
        size="xs"
        icon={<IconSearch size="0.8rem" stroke={1.5} />}
        rightSectionWidth={os === 'macos' ? 52 : 70}
        rightSection={<Code className={classes.searchCode}>{kbd}</Code>}
        styles={{ rightSection: { pointerEvents: 'none' } }}
        mb="sm"
      />
    </FocusTrap>
  );
};

export default NavbarSearch;
