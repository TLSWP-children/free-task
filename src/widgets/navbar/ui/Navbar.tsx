import { useFoldersQuery } from '@/entities/folder';
import { Navbar, NavbarFolder, NavbarMainLink } from '@/entities/navbar';
import DeleteFolderMenu from '@/features/folder/delete-folder-menu/ui/DeleteFolderMenu';
import { NavbarCreateFolder } from '@/features/navbar-create-folder';
import { NavbarSearch } from '@/features/navbar-search';
import { NavbarUserButton } from '@/features/user/navbar-user-button';

import { IconBulb, IconFolders } from '@tabler/icons-react';

const links = [
  { icon: IconBulb, label: 'Dashboard', notifications: 3, id: 0 },
  { icon: IconFolders, label: 'Templates', id: 2 },
];

// const folders = [
//   { emoji: '👍', label: 'Sales', id: 0 },
//   { emoji: '🚚', label: 'Deliveries', id: 1 },
//   { emoji: '💸', label: 'Discounts', id: 2 },
//   { emoji: '💰', label: 'Profits', id: 3 },
//   { emoji: '✨', label: 'Reports', id: 4 },
//   { emoji: '🛒', label: 'Orders', id: 5 },
//   { emoji: '📅', label: 'Events', id: 6 },
//   { emoji: '🙈', label: 'Debts', id: 7 },
//   { emoji: '💁‍♀️', label: 'Customers', id: 8 },
// ];

const AppNavbar = () => {
  const folders = useFoldersQuery();
  const mainLinks = links.map((link) => (
    <NavbarMainLink key={link.id} link={link} />
  ));

  const folderLinks = folders.isSuccess
    ? folders.data.map((folder) => (
        <NavbarFolder
          key={folder.id}
          folder={folder}
          right={<DeleteFolderMenu id={folder.id} />}
        />
      ))
    : 'loading...';

  return (
    <Navbar
      user={<NavbarUserButton />}
      search={<NavbarSearch />}
      mainLinks={mainLinks}
      folderLinks={folderLinks}
      createFolderButton={<NavbarCreateFolder />}
    />
  );
};
export default AppNavbar;
