import { useState } from "react";
import styles from "./styles/imageSlider.module.css";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";

interface ImageSliderProps {
  images: string[];
}

const ImageSlider = ({ images }: ImageSliderProps) => {
  const [startIndex, setStartIndex] = useState(0);

  const prevSlide = () => {
    setStartIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 3 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setStartIndex((prevIndex) =>
      prevIndex === images.length - 3 ? 0 : prevIndex + 1
    );
  };

  const renderImages = () => {
    const visibleImages = images.slice(startIndex, startIndex + 3);
    return visibleImages.map((image, index) => (
      <img
        key={index}
        src={image}
        alt={`Slide ${index}`}
        className={styles["image"]}
      />
    ));
  };

  return (
    <div className={styles["container"]}>
      <button onClick={prevSlide}>
        <MdKeyboardArrowLeft size={30} />
      </button>
      {renderImages()}
      <button onClick={nextSlide}>
        <MdKeyboardArrowRight size={30} />
      </button>
    </div>
  );
};

export default ImageSlider;
