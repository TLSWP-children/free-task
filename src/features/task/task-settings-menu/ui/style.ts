import { createStyles } from "@mantine/core";

export const useStyles = createStyles(() => ({
    icon: {
      opacity: 0,
      '.task-wrapper:hover &': {
        opacity: 1,
      },
    },
  }));
  