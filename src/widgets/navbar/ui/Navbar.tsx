import { Navbar, NavbarFolder, NavbarMainLink } from '@/entities/navbar';
import { NavbarCreateFolder } from '@/features/navbar-create-folder';
import { NavbarSearch } from '@/features/navbar-search';

import { IconBulb, IconFolders } from '@tabler/icons-react';

const links = [
  { icon: IconBulb, label: 'Activity', notifications: 3, id: 0 },
  { icon: IconFolders, label: 'Templates', id: 2 },
];

const folders = [
  { emoji: '👍', label: 'Sales', id: 0 },
  { emoji: '🚚', label: 'Deliveries', id: 1 },
  { emoji: '💸', label: 'Discounts', id: 2 },
  { emoji: '💰', label: 'Profits', id: 3 },
  { emoji: '✨', label: 'Reports', id: 4 },
  { emoji: '🛒', label: 'Orders', id: 5 },
  { emoji: '📅', label: 'Events', id: 6 },
  { emoji: '🙈', label: 'Debts', id: 7 },
  { emoji: '💁‍♀️', label: 'Customers', id: 8 },
];

const AppNavbar = () => {
  const mainLinks = links.map((link) => (
    <NavbarMainLink key={link.id} link={link} />
  ));

  const folderLinks = folders.map((folder) => (
    <NavbarFolder key={folder.id} folder={folder} />
  ));

  return (
    <Navbar
      search={<NavbarSearch />}
      mainLinks={mainLinks}
      folderLinks={folderLinks}
      createFolderButton={<NavbarCreateFolder />}
    />
  );
};
export default AppNavbar;
