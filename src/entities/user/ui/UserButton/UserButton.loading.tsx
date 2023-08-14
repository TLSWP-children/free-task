import {
  UnstyledButton,
  UnstyledButtonProps,
  Group,
  Avatar,
  Text,
  Skeleton,
} from '@mantine/core';
import { useStyles } from './style';

interface UserButtonLoadingProps extends UnstyledButtonProps {}

export const UserButtonLoading = ({ ...others }: UserButtonLoadingProps) => {
  const { classes } = useStyles();

  return (
    <UnstyledButton className={classes.user} {...others}>
      <Group>
        <Skeleton height="2.075rem" circle />
        <div style={{ flex: 1 }}>
          <Skeleton h="16px">
            <Text size="sm" weight={500}>
              loading login...
            </Text>
          </Skeleton>
          <Skeleton h="14px" mt="6px">
            <Text color="dimmed" size="xs">
              loading email...
            </Text>
          </Skeleton>
        </div>
        {/* {icon || <IconChevronRight size="0.9rem" stroke={1.5} />} */}
      </Group>
    </UnstyledButton>
  );
};
