import { ArrowLeftIcon } from '@/assets/icons/ArrowLeftIcon';
import { ArrowRightIcon } from '@/assets/icons/ArrowRightIcon';

import styles from './controls.module.scss';

export const Controls = ({ scrollbarRef, onPrev, onNext }) => {
  return (
    <div className={styles.controls}>
      <div className={`${styles.scrollbar} scrollbar`} ref={scrollbarRef} />
      <div className={styles.nav}>
        <div className={`${styles.prev} prev`} onClick={onPrev}>
          <ArrowLeftIcon />
        </div>
        <div className={`${styles.next} next`} onClick={onNext}>
          <ArrowRightIcon />
        </div>
      </div>
    </div>
  );
};
