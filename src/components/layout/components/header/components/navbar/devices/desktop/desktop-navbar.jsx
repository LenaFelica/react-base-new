import { Link } from '@/components/link';

import styles from './desktop-navbar.module.scss';

export const DesktopNavbar = ({ navbarItems }) => {
  return (
    <nav>
      <ul className={styles.desktopNavbar}>
        {navbarItems.map((link) => (
          <li key={link.id}>
            <Link href={link.href}>{link.title}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
