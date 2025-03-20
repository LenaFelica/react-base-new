import { Tooltip } from '@/components/tooltip/';

import styles from './benefit-item.module.scss';

export const BenefitItem = ({ benefitItemData }) => {
  const { subtitle, description, tooltip, icon: IconComponent } = benefitItemData;
  return (
    <div className={styles.item}>
      <h3 className={styles.subtitle}>
        {subtitle}
        {tooltip && <Tooltip text={tooltip} icon={IconComponent} />}
      </h3>
      <p className={styles.description}>{description}</p>
    </div>
  );
};
