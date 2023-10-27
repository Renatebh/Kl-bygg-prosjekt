
import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Thumbs } from 'swiper/modules';
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

    console.log(imageData)
    // const navigate = useNavigate();

    // const projects = projectsData.main.projects.projectCards;


    // const sortedProjects = projects.sort((a, b) => {
    //     const dateA = new Date(a.startDate);
    //     const dateB = new Date(b.startDate);
    //     return dateB.getTime() - dateA.getTime();
    // });

    const allImages = imageData.flatMap((project) =>
        project.images.map((imagePath) => ({
            projectId: project.id,
            projectName: project.projectName,
            image: imagePath,
        }))
    );

    // const latestProject = allImages[0];
    // const restProjects = allImages.slice(1);

    // const handleCardClick = (id: number) => {
    //     navigate(`/projects/${id}`);
    //   };

    return (
        <div className={styles['swiper-container']}>
            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y, Thumbs]}
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
                                <img
                                    src={image.image}
                                    alt={`slide ${project.name}`}
                                    className={styles['main-image']}
                                />
                                <div className={styles["text-box"]}>
                                            <h3 className={styles["project-name"]}>{project.name}</h3>
                                            <p className={styles["project-date"]}> {project.timezone}</p>
                                        </div>
                            </SwiperSlide>
                        );
                    }
                    return null;
                })}
            </Swiper>
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                modules={[Thumbs]}
                watchSlidesProgress
                onSwiper={(swiper: SwiperType) => setThumbsSwiper(swiper)}
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
                                        <div className={styles["text-box"]}>
                                            <h3 className={styles["project-name"]}>{project.name}</h3>
                                            <p className={styles["project-date"]}> {project.timezone}</p>
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