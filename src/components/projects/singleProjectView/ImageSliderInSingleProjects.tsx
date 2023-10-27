import styles from './styles/slider.module.css'
import './styles/slider.css'
import {Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Thumbs } from 'swiper/modules';

// import 'swiper/css/bundle';
// import 'swiper/swiper-bundle.css'
import 'swiper/css'
import 'swiper/css/pagination';
import 'swiper/css/navigation'

// import 'swiper/css/navigation';
// import '../../../node_modules/swiper/swiper-bundle.min.css'


const Slider = ({images, projectName}: {images: string[], projectName: string}) => {
    console.log("Images array:", images);
  return (
    <div className={styles['swiper-wrapper']}>
    <Swiper
    modules={[Navigation, Pagination, Thumbs]}
    spaceBetween={30}
    slidesPerView={3}
    loop={true}
    navigation={true}
    pagination={{clickable: true}}
    breakpoints={{
      0: {
        slidesPerView: 1, 
      },
      640: {
        slidesPerView: 2, 
      },
      1024: {
        slidesPerView: 3, 
      },
    }}
    >
        {images.map((image, index) => (
            <SwiperSlide key={index} className={styles["main-slide"]}>
                <img className={styles['slider-image']} src={image} alt={`Slide ${projectName} ${index + 1}`} />
            </SwiperSlide>
        ))}
    </Swiper>
    </div>
  );
};

export default Slider;
