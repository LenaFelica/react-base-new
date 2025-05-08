const lockScroll = () => {
  document.body.classList.add('lock');
};

const unLockScroll = () => {
  document.body.classList.remove('lock');
};

export { lockScroll, unLockScroll };
