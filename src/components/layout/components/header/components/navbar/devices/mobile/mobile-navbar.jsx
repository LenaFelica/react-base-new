import { CloseIcon } from '@/assets/icons';
import { IconButton } from '@/components/icon-button';
import { Link } from '@/components/link';

import styles from './mobile-navbar.module.scss';

export const MobileNavbar = ({ navbarItems, isOpen, onClose }) => {
  if (!isOpen) {
    return null;
  }

  const handleCloseNavbar = () => {
    onClose();
  };

  return (
    <div className={styles.mobileNavbar}>
      <nav>
        <ul className={styles.navbar}>
          {navbarItems.map((link) => (
            <li key={link.id} onClick={handleCloseNavbar}>
              <Link href={link.href}>{link.title}</Link>
            </li>
          ))}
        </ul>
      </nav>
      <IconButton
        icon={<CloseIcon />}
        onClick={handleCloseNavbar}
        additionalClassname={styles.closeBtn}
      />
    </div>
  );
};
