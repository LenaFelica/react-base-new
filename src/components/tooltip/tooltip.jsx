import { useState } from 'react';

import { TooltipIcon } from '@/assets/icons';

import styles from './tooltip.module.scss';

export const Tooltip = ({ text, icon: IconComponent = TooltipIcon }) => {
  const [isShowTooltip, setIsShowTooltip] = useState(false);

  const handleMouseEnter = () => {
    setIsShowTooltip(true);
  };

  const handleMouseLeave = () => {
    setIsShowTooltip(false);
  };

  return (
    <span
      className={styles.tooltip}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <span className={styles.icon}>
        <IconComponent />
      </span>
      {isShowTooltip && <span className={styles.text}>{text}</span>}
    </span>
  );
};
