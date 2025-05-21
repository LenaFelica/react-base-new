import { useEffect, useState } from 'react';

import { BurgerIcon, PhoneIcon } from '@/assets/icons';
import { Container } from '@/components/container';
import { IconButton } from '@/components/icon-button';
import { useScrollLock } from '@/hooks/useScrollLock';
import { useWindowSize } from '@/hooks/useWindowSize';

import { Logo } from '../logo/logo';
import { PhoneCallButton } from '../phone-call-button/phone-call-button';
import { Navbar } from './components/navbar';

import styles from './header.module.scss';

export const Header = () => {
  const [isMobileNavbarOpen, setIsMobileNavbarOpen] = useState(false);
  const { lockScroll, unlockScroll } = useScrollLock();
  const { isTablet, width } = useWindowSize();

  useEffect(() => {
    if (!isMobileNavbarOpen) {
      unlockScroll();
      return;
    }

    lockScroll();
  }, [isMobileNavbarOpen]);

  const handleMobileNavbarOpen = () => {
    setIsMobileNavbarOpen(true);
  };

  const handleMobileNavbarClose = () => {
    setIsMobileNavbarOpen(false);
  };

  return (
    <header className={styles.header}>
      <Container isWide>
        <div className={styles.content}>
          <Logo />
          <Navbar isOpen={isMobileNavbarOpen} onClose={handleMobileNavbarClose} />
          {isTablet ? (
            <div className={styles.buttons}>
              <IconButton href="tel:88000001122" icon={<PhoneIcon />} isLink />
              <IconButton onClick={handleMobileNavbarOpen} icon={<BurgerIcon />} />
            </div>
          ) : (
            <PhoneCallButton />
          )}
        </div>
      </Container>
    </header>
  );
};
