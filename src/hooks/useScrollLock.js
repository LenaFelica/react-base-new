import { useRef } from 'react';

export const useScrollLock = () => {
  const isLocked = useRef(false);

  const lockScroll = () => {
    if (typeof window === 'undefined' || isLocked.current) {
      return;
    }

    document.body.classList.add('lock');
    isLocked.current = true;
  };

  const unlockScroll = () => {
    if (typeof window === 'undefined' || !isLocked.current) {
      return;
    }

    document.body.classList.remove('lock');
    isLocked.current = false;
  };

  return { lockScroll, unlockScroll };
};
