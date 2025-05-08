import { useState } from 'react';

import { teachersImages } from '@/assets/images';
import { Button } from '@/components/button';
import { Modal } from '@/components/modal';

import { TeacherModalContent } from './teacher-modal-content';

import styles from './teacher-item.module.scss';

export const TeacherItem = ({ teacher }) => {
  const { name, description, imageSrc } = teacher;
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalOpen = () => {
    console.log('Открытие модалки');
    setIsModalOpen(true);
  };
  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  return (
    <div className={styles.teacherItem}>
      <img src={teachersImages[imageSrc]} alt={name} />
      <div>
        <div className={styles.name}>{name}</div>
        <div className={styles.description}>{description}</div>
        <Button additionalClassname={styles.btn} variant="text" onClick={handleModalOpen}>
          Подробнее
        </Button>
      </div>
      <Modal isOpen={isModalOpen} onClose={handleModalClose}>
        <TeacherModalContent teacher={teacher} />
      </Modal>
    </div>
  );
};
