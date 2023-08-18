import { Flex, rem } from '@mantine/core';
import { useStyles } from './style';
import Link from 'next/link';
import { FolderItem } from '@/entities/folder';
import { ReactNode } from 'react';

export interface NavbarFolderProps {
  folder: FolderItem;
  right?: ReactNode;
}

const NavbarFolder = ({ folder, right }: NavbarFolderProps) => {
  const { classes, cx } = useStyles();
  return (
    <Link
      href={`/folder/${folder.id}`}
      className={cx(classes.folderLink, 'folder-item-wrapper')}
    >
      <Flex align="center">
        <span
          style={{
            marginRight: rem(9),
            fontSize: rem(16),
            width: '32px',
            textAlign: 'center',
          }}
        >
          {folder.emoji}
        </span>
        {folder.title}
      </Flex>
      {right}
    </Link>
  );
};

export default NavbarFolder;
