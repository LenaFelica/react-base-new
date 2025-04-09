import { useEffect, useRef } from 'react';
import { Navigation, Scrollbar } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
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

  useEffect(() => {
    if (swiperRef.current && scrollbarRef.current) {
      swiperRef.current.update();
    }
  }, [swiperRef, scrollbarRef]);

  const handleSwiperInit = (swiper) => {
    swiperRef.current = swiper;

    if (swiperRef.current) {
      swiper.params.scrollbar.el = scrollbarRef.current;
      swiper.scrollbar.init();
      swiper.scrollbar.updateSize();
    }
  };

  const handleSlideChange = (slideDirection) => {
    return function () {
      if (!swiperRef.current) {
        return;
      }
      if (slideDirection === 'prev') {
        swiperRef.current.slidePrev();
      }
      if (slideDirection === 'next') {
        swiperRef.current.slideNext();
      }
    };
  };

  return (
    <section className={styles.teachers}>
      <Container>
        <h2 className={styles.title}>Профессиональные тренеры</h2>
        <Swiper
          className={styles.list}
          modules={[Navigation, Scrollbar]}
          spaceBetween={30}
          slidesPerView={isMobile ? 'auto' : 3}
          navigation={{
            nextEl: '.next',
            prevEl: '.prev',
          }}
          scrollbar={{
            el: scrollbarRef.current,
            draggable: true,
            hide: false,
          }}
          onBeforeInit={handleSwiperInit}
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
