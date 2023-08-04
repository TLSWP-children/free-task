import { Badge, UnstyledButton } from '@mantine/core';
import { TablerIconsProps } from '@tabler/icons-react';
import { useStyles } from './style';

export interface NavbarMainLinkProps {
  link:
    | {
        icon: (props: TablerIconsProps) => JSX.Element;
        label: string;
        notifications: number;
      }
    | {
        icon: (props: TablerIconsProps) => JSX.Element;
        label: string;
        notifications?: undefined;
      };
}

const NavbarMainLink = ({ link }: NavbarMainLinkProps) => {
  const { classes } = useStyles();
  return (
    <UnstyledButton key={link.label} className={classes.mainLink}>
      <div className={classes.mainLinkInner}>
        <link.icon size={20} className={classes.mainLinkIcon} stroke={1.5} />
        <span>{link.label}</span>
      </div>
      {link.notifications && (
        <Badge size="sm" variant="filled" className={classes.mainLinkBadge}>
          {link.notifications}
        </Badge>
      )}
    </UnstyledButton>
  );
};

export default NavbarMainLink;
