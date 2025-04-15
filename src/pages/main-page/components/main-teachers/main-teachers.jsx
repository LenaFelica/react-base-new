import { useRef } from 'react';
import { Scrollbar } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import teachers from '@/api/teachers.json';
import { Container } from '@/components/container';
import { useWindowSize } from '@/hooks/useWindowSize';

import { Controls } from './components/controls';
import { TeacherItem } from './components/teacher-item';

import styles from './main-teachers.module.scss';

export const MainTeachers = () => {
  const { isMobile } = useWindowSize();

  const swiperRef = useRef(null);
  const scrollbarRef = useRef(null);

  const initSwiper = (swiper) => {
    swiperRef.current = swiper;

    if (scrollbarRef.current) {
      swiper.params.scrollbar.el = scrollbarRef.current;
      swiper.scrollbar.init();
      swiper.scrollbar.updateSize();
    }
  };

  const createSlideChangeHandler = (slideDirection) => () => {
    if (slideDirection === 'prev') {
      swiperRef.current?.slidePrev();
    }
    if (slideDirection === 'next') {
      swiperRef.current?.slideNext();
    }
  };

  return (
    <section className={styles.teachers}>
      <Container>
        <h2 className={styles.title}>Профессиональные тренеры</h2>

        <Swiper
          className={styles.list}
          modules={[Scrollbar]}
          spaceBetween={isMobile ? 20 : 40}
          slidesPerView={isMobile ? 'auto' : 3}
          scrollbar={{
            el: null,
            draggable: true,
          }}
          onBeforeInit={initSwiper}
        >
          {teachers.map((teacher) => (
            <SwiperSlide key={teacher.id} className={styles.swiperSlide}>
              <TeacherItem teacher={teacher} />
            </SwiperSlide>
          ))}
        </Swiper>

        <Controls
          scrollbarRef={scrollbarRef}
          onPrev={createSlideChangeHandler('prev')}
          onNext={createSlideChangeHandler('next')}
        />
      </Container>
    </section>
  );
};
