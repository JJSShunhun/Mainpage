import React, { useState } from 'react';
import './WeeklyPerformance.css';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'; 

const WeeklyPerformance = () => {
  const [startIndex, setStartIndex] = useState(0); 
  const images = [ 
    'image1.jpg',
    'image2.jpg',
    'image3.jpg',
    'image4.jpg',
    'image5.jpg'
  ];
  const visibleImages = images.slice(startIndex, startIndex + 3);

  const prevSlide = () => { 
    const newStartIndex = startIndex === 0 ? images.length - 3 : startIndex - 1;
    setStartIndex(newStartIndex);
  };

  const nextSlide = () => { 
    const newStartIndex = startIndex === images.length - 3 ? 0 : startIndex + 1;
    setStartIndex(newStartIndex);
  };

  return (
    <div className="weekly-performance">
      <h2 className="title">이주의 공연</h2>
      <div className="slider">
        <FaChevronLeft className="arrow left-arrow" onClick={prevSlide} />
        <div className="image-container">
          {visibleImages.map((image, index) => (
            <img
              key={index}
              src={`${process.env.PUBLIC_URL}/assets/${image}`}
              alt={`이주의 공연 이미지 ${index + startIndex + 1}`}
              className="slide"
            />
          ))}
        </div>
        <FaChevronRight className="arrow right-arrow" onClick={nextSlide} />
      </div>
    </div>
  );
};

export default WeeklyPerformance;



