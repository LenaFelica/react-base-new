import { useEffect, useRef, useState } from 'react';
import { Scrollbar } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/scrollbar';

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
  const [scrollbarReady, setScrollbarReady] = useState(false);

  useEffect(() => {
    if (scrollbarRef.current) {
      setScrollbarReady(true);
    }
  }, []);

  useEffect(() => {
    if (swiperRef.current && scrollbarRef.current && scrollbarReady) {
      swiperRef.current.update();
    }
  }, [scrollbarReady]);

  const initSwiper = (swiper) => {
    return (swiperRef.current = swiper);
  };

  const handleSlideChange = (slideDirection) => () => {
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
          spaceBetween={isMobile ? 30 : 40}
          slidesPerView={isMobile ? 'auto' : 3}
          scrollbar={{
            el: scrollbarReady ? scrollbarRef.current : null,
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
          onPrev={handleSlideChange('prev')}
          onNext={handleSlideChange('next')}
        />
      </Container>
    </section>
  );
};
