import { rem } from '@mantine/core';
import { useStyles } from './style';
import Link from 'next/link';

export interface NavbarFolderProps {
  folder: {
    emoji: string;
    label: string;
  };
}

const NavbarFolder = ({ folder }: NavbarFolderProps) => {
  const { classes } = useStyles();
  return (
    <Link href="/" key={folder.label} className={classes.folderLink}>
      <span style={{ marginRight: rem(9), fontSize: rem(16) }}>
        {folder.emoji}
      </span>{' '}
      {folder.label}
    </Link>
  );
};

export default NavbarFolder;
