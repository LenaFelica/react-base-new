import { useWindowSize } from '@/hooks/useWindowSize';

import { DesktopNavbar } from './devices/desktop';
import { MobileNavbar } from './devices/mobile';

const navbarItems = [
  {
    id: 1,
    title: 'О школе',
    href: '#status',
  },
  {
    id: 2,
    title: 'Тренеры',
    href: '#teachers',
  },
  {
    id: 3,
    title: 'Стоимость',
    href: '#packages',
  },
];

export const Navbar = ({ isOpen, onClose }) => {
  const { isTablet } = useWindowSize();

  return (
    <>
      {isTablet ? (
        <MobileNavbar navbarItems={navbarItems} isOpen={isOpen} onClose={onClose} />
      ) : (
        <DesktopNavbar navbarItems={navbarItems} />
      )}
    </>
  );
};
