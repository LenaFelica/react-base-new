import { ArrowLeftIcon } from '@/assets/icons/ArrowLeftIcon';
import { ArrowRightIcon } from '@/assets/icons/ArrowRightIcon';

import styles from './controls.module.scss';

export const Controls = ({ scrollbarRef }) => {
  return (
    <div className={styles.controls}>
      <div className={`${styles.scrollbar} scrollbar`} ref={scrollbarRef} />
      <div className={styles.nav}>
        <div className={`${styles.prev} prev`}>
          <ArrowLeftIcon />
        </div>
        <div className={`${styles.next} next`}>
          <ArrowRightIcon />
        </div>
      </div>
    </div>
  );
};
