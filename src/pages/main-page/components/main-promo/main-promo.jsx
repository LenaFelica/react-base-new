import promoGirlImg from '@/assets/images/student.png';
import { Button } from '@/components/button';
import { Container } from '@/components/container';

import styles from './main-promo.module.scss';

export const MainPromo = () => {
  return (
    <section className={styles.promo}>
      <Container>
        <div className={styles.wrapper}>
          <div className={styles.text}>
            <h1 className={styles.title}>ROBO SCHOOL</h1>
            <div className={styles.subtitle}>
              Курсы повышения квалификации по робототехнике для педагогов начальной школы
            </div>
          </div>
          <Button variant="primary" additionalClassname={styles.btn}>
            Записаться на курс
          </Button>
          <img className={styles.img} src={promoGirlImg} alt="promo" />
        </div>
      </Container>
    </section>
  );
};
