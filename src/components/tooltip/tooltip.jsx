import { TooltipIcon } from '@/assets/icons';

import styles from './tooltip.module.scss';

export const Tooltip = ({ text, icon: IconComponent = TooltipIcon }) => {
  return (
    <span className={styles.tooltip}>
      <span className={styles.icon}>
        <IconComponent />
      </span>
      <span className={styles.text}>{text}</span>
    </span>
  );
};
