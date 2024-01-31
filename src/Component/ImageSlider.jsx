import { useState } from "react";

const ImageSlider = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slidersStyle = {
    height: "100%",
    position: "relative",
    margin: "5px",
  };

  const slideStyles = {
    width: "100%",
    height: "100%",
    borderRadius: "10px",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundImage: `url(${slides[currentIndex].url})`,
  };

  const leftArrowStyle = {
    position: "absolute",
    top: "50%",
    transform: "translate(0, -50%)",
    color: "#fff",
    cursor: "pointer",
    left: "30px",
  };

  const rightArrowStyle = {
    position: "absolute",
    top: "50%",
    transform: "translate(0, -50%)",
    color: "#fff",
    cursor: "pointer",
    right: "30px",
  };

  const dotsContainerStyles = {
    display: "flex",
    justifyContent: "center",
  };

  const dotStyles = {
    margin: "0 3px",
    cursor: "pointer",
    fontSize: "20px",
  };

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };
  return (
    <div style={slidersStyle}>
      <div style={leftArrowStyle} onClick={goToPrevious}>
        {" "}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="bi bi-caret-left svgCSS"
          viewBox="0 0 16 16"
        >
          <path d="M10 12.796V3.204L4.519 8zm-.659.753-5.48-4.796a1 1 0 0 1 0-1.506l5.48-4.796A1 1 0 0 1 11 3.204v9.592a1 1 0 0 1-1.659.753" />
        </svg>
      </div>
      <div style={rightArrowStyle} onClick={goToNext}>
        {" "}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="bi bi-caret-right svgCSS"
          viewBox="0 0 16 16"
        >
          <path d="M6 12.796V3.204L11.481 8zm.659.753 5.48-4.796a1 1 0 0 0 0-1.506L6.66 2.451C6.011 1.885 5 2.345 5 3.204v9.592a1 1 0 0 0 1.659.753" />
        </svg>
      </div>
      <div style={slideStyles}></div>
      <div style={dotsContainerStyles}>
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            style={dotStyles}
            onClick={() => goToSlide(slideIndex)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="bi bi-record-fill svgCSS2"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M8 13A5 5 0 1 0 8 3a5 5 0 0 0 0 10"
              />
            </svg>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
