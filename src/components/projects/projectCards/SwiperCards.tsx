
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Thumbs } from 'swiper/modules';
import { Swiper as SwiperType } from 'swiper/react';
import styles from './styles/swiperCards.module.css'

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import imageData from '../.././../images/projectImages/json/imageData.json';
import projectsData from "../../../translations/no/global.json";

interface SwiperType {
    slideNext: () => void;
    slidePrev: () => void;
}

const SwiperCards = () => {
    const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | any>(null);

    const navigate = useNavigate();

    const allImages = imageData.flatMap((project) =>
        project.images.map((imagePath) => ({
            projectId: project.id,
            projectName: project.projectName,
            image: imagePath,
        }))
    );

    const handleCardClick = (id: number) => {
        navigate(`/projects/${id}`);
        console.log(`Card with project ID ${id} clicked`);
    };

    const breakpoints = {
        0:{
            slidesPerView: 2
        },
        768: {
            slidesPerView: 2, // Number of slides to show for screens wider or equal to 768px
        },
        1024: {
            slidesPerView: 3, // Number of slides to show for screens wider or equal to 1024px
        },
        1440: {
            slidesPerView: 4, // Number of slides to show for screens wider or equal to 1440px
        },
    };


    return (
        <div className={styles['swiper-container']}>
            <Swiper
                modules={[Navigation, Pagination, Thumbs]}
                thumbs={{ swiper: thumbsSwiper }}
                slidesPerView={1}
                navigation={true}
                pagination={{ clickable: true }}

            >
                {projectsData.main.projects.projectCards.map((project) => {
                    const image = allImages.find((img) => img.projectId === project.id);
                    if (image) {
                        return (
                            <SwiperSlide key={project.id}>
                                <div onClick={() => handleCardClick(project.id)}>
                                    <img
                                        src={image.image}
                                        alt={`slide ${project.name}`}
                                        className={styles['main-image']}
                                    />
                                    <div className={styles["text-box"]}>
                                        <h3 className={styles["project-name"]}>{project.name}</h3>
                                        <p className={styles["project-date"]}> {project.timezone}</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                        );
                    }
                    return null;
                })}
            </Swiper>
            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                modules={[Thumbs]}
                watchSlidesProgress
                onSwiper={(swiper: SwiperType) => setThumbsSwiper(swiper)}
                breakpoints={breakpoints}
            >
                {projectsData.main.projects.projectCards.map((project) => (
                    <SwiperSlide key={project.id}>
                        {allImages.map((image, imageIndex) => {
                            if (project.id === imageIndex + 1) {
                                return (
                                    <div className={styles['thumbnail-container']} key={imageIndex}>
                                        <img
                                            src={image.image}
                                            alt={`slide ${project.name}`}
                                            className={styles['thumbnail-image']}
                                        />

                                        <div className={styles["text-box-slider-cards"]}>
                                            <h3 className={styles["project-name-slider-cards"]}>{project.name}</h3>
                                            <p className={styles["project-date-slider-card"]}> {project.timezone}</p>
                                        </div>
                                    </div>

                                );
                            }
                        })}
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

export default SwiperCards