import { useState } from 'react';

import { TooltipIcon } from '@/assets/icons';

import styles from './tooltip.module.scss';

export const Tooltip = ({ text, icon: IconComponent = TooltipIcon }) => {
  const [showTooltip, setShowTooltip] = useState(false);

  const onMouseEnterHandler = () => {
    setShowTooltip(true);
  };

  const onMouseLeaveHandler = () => {
    setShowTooltip(false);
  };

  return (
    <span
      className={styles.tooltip}
      onMouseEnter={onMouseEnterHandler}
      onMouseLeave={onMouseLeaveHandler}
    >
      <span className={styles.icon}>
        <IconComponent />
      </span>
      {showTooltip && <span className={styles.text}>{text}</span>}
    </span>
  );
};
