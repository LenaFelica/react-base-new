import { ArrowLeftIcon } from '@/assets/icons/ArrowLeftIcon';
import { ArrowRightIcon } from '@/assets/icons/ArrowRightIcon';

import styles from './controls.module.scss';

export const Controls = ({ scrollbarRef, onPrev, onNext }) => {
  return (
    <div className={styles.controls}>
      <div className={`${styles.scrollbar} scrollbar`} ref={scrollbarRef} />
      <div className={styles.swiperButtons}>
        <div className={styles.swiperBtn} onClick={onPrev}>
          <ArrowLeftIcon />
        </div>
        <div className={styles.swiperBtn} onClick={onNext}>
          <ArrowRightIcon />
        </div>
      </div>
    </div>
  );
};
