import { createStyles, rem } from '@mantine/core';

export const useStyles = createStyles((theme) => ({
  wrapper: {
    borderRadius: theme.radius.sm,
    paddingLeft: `${theme.spacing.xs}`,
    '&:hover': {
      backgroundColor:
        theme.colorScheme === 'dark'
          ? theme.colors.dark[6]
          : theme.colors.gray[0],
      color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    },
  },
  input: {
    backgroundColor: 'transparent !important',
    color:
      theme.colorScheme !== 'dark'
        ? theme.colors.dark[7]
        : theme.colors.gray[0],
    ':disabled': {
      color:
        theme.colorScheme !== 'dark'
          ? theme.colors.dark[7]
          : theme.colors.gray[0],
      opacity: 0.6,
      textDecoration: 'line-through',
    },
  },
  checkbox: {
    cursor: 'pointer',
  },
}));
