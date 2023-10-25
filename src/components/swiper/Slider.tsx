import {Swiper, SwiperSlide } from 'swiper/react';
// import { register } from 'swiper/element/bundle';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
// register();
import "swiper/swiper-bundle.css";
import styles from './styles/slider.module.css'

interface ImageSliderProps {
    images: string[];
    projectName: string
  }

const Slider = ({images, projectName}: ImageSliderProps) => {
    console.log("Images array:", images);
  return (
    <Swiper
    modules={[Navigation, Pagination, Scrollbar, A11y]}
    spaceBetween={50}
    slidesPerView={3}
    navigation
    pagination={{ clickable: true }}
    scrollbar={{ draggable: true }}
    onSlideChange={() => console.log('slide change')}
    onSwiper={(swiper) => console.log(swiper)}
    >
        {images.map((image, index) => (
            <SwiperSlide key={index}>
                <img className={styles['slider-image']} src={image} alt={`Slide ${projectName} ${index + 1}`} />
            </SwiperSlide>
        ))}
    </Swiper>
  );
};

export default Slider;
