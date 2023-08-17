import { rem } from '@mantine/core';
import { useStyles } from './style';
import Link from 'next/link';
import { FolderItem } from '@/entities/folder';

export interface NavbarFolderProps {
  folder: FolderItem;
}

const NavbarFolder = ({ folder }: NavbarFolderProps) => {
  const { classes } = useStyles();
  return (
    <Link href={`/folder/${folder.id}`} className={classes.folderLink}>
      <span style={{ marginRight: rem(9), fontSize: rem(16) }}>
        {folder.emoji}
      </span>{' '}
      {folder.title}
    </Link>
  );
};

export default NavbarFolder;
