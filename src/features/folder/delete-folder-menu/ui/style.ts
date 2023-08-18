import { createStyles } from '@mantine/core';

export const useStyles = createStyles(() => ({
  icon: {
    opacity: 0,
    '.folder-item-wrapper:hover &': {
      opacity: 1,
    },
  },
}));
