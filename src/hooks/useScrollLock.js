import { useRef } from 'react';

export const useScrollLock = () => {
  const originalStyles = useRef({
    originalPaddingRight: '',
    originalScrollbarGutter: '',
    scrollbarWidth: 0,
  });

  const lockScroll = () => {
    originalStyles.current = {
      originalPaddingRight: document.body.style.paddingRight,
      originalScrollbarGutter: document.body.style.scrollbarGutter,
      scrollbarWidth: window.innerWidth - document.documentElement.clientWidth,
    };

    document.body.classList.add('lock');
    document.body.style.paddingRight = `${originalStyles.current.scrollbarWidth}px`;
    document.body.style.scrollbarGutter = 'stable';
  };

  const unlockScroll = () => {
    document.body.classList.remove('lock');
    document.body.style.paddingRight = originalStyles.current.originalPaddingRight;
    document.body.style.scrollbarGutter = originalStyles.current.originalScrollbarGutter;
  };

  return { lockScroll, unlockScroll };
};
