export const useScrollLock = () => {
  const lockScroll = () => {
    document.body.classList.add('lock');
  };

  const unlockScroll = () => {
    document.body.classList.remove('lock');
  };

  return { lockScroll, unlockScroll };
};
