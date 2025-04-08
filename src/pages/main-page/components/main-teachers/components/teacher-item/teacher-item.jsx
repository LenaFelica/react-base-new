import { teachersImages } from '@/assets/images';
import { Button } from '@/components/button';

import styles from './teacher-item.module.scss';

export const TeacherItem = ({ teacher }) => {
  const { name, description, imageSrc } = teacher;
  return (
    <div className={styles.teacherItem}>
      <img src={teachersImages[imageSrc]} alt={name} />
      <div>
        <div className={styles.name}>{name}</div>
        <div className={styles.description}>{description}</div>
        <Button additionalClassname={styles.btn} variant="text">
          Подробнее
        </Button>
      </div>
    </div>
  );
};
