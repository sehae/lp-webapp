"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight, faXmark } from "@fortawesome/free-solid-svg-icons";
import "../styles/carousel.css";

export default function PhotoGallery() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const images = [
    "/images/gal1.jpg",
    "/images/gal2.jpg",
    "/images/gal3.jpg",
    "/images/gal4.jpg",
    "/images/gal5.jpg",
    "/images/gal6.jpg",
    "/images/gal7.jpg"
  ];

  const nextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToSlide = (index) => {
    if (isAnimating || index === currentIndex) return;
    setIsAnimating(true);
    setCurrentIndex(index);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimating(false);
    }, 600);
    return () => clearTimeout(timer);
  }, [currentIndex]);

  // Auto-advance carousel
  useEffect(() => {
    if (!isFullscreen) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isFullscreen, images.length]);

  return (
    <section id="photos" className="section">
      <div className="content">
        <h2>Photo Gallery</h2>
        
        <div className="carousel-container">
          <button className="carousel-btn prev" onClick={prevSlide} aria-label="Previous image">
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>

          <div className="carousel-track">
            {images.map((image, index) => {
              const offset = index - currentIndex;
              const isActive = index === currentIndex;
              
              return (
                <div
                  key={index}
                  className={`carousel-slide ${isActive ? 'active' : ''}`}
                  style={{
                    transform: `translateX(${offset * 100}%) scale(${isActive ? 1 : 0.8})`,
                    opacity: Math.abs(offset) <= 1 ? 1 : 0,
                    zIndex: isActive ? 2 : 1
                  }}
                  onClick={() => isActive && setIsFullscreen(true)}
                >
                  <div className="image-wrapper">
                    <Image
                      src={image}
                      alt={`Gallery image ${index + 1}`}
                      fill
                      style={{ objectFit: 'cover' }}
                      priority={index === 0}
                    />
                  </div>
                </div>
              );
            })}
          </div>

          <button className="carousel-btn next" onClick={nextSlide} aria-label="Next image">
            <FontAwesomeIcon icon={faChevronRight} />
          </button>
        </div>

        {/* Dots indicator */}
        <div className="carousel-dots">
          {images.map((_, index) => (
            <button
              key={index}
              className={`dot ${index === currentIndex ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to image ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Fullscreen modal */}
      {isFullscreen && (
        <div className="fullscreen-modal" onClick={() => setIsFullscreen(false)}>
          <button className="close-btn" onClick={() => setIsFullscreen(false)}>
            <FontAwesomeIcon icon={faXmark} />
          </button>
          <div className="fullscreen-content" onClick={(e) => e.stopPropagation()}>
            <Image
              src={images[currentIndex]}
              alt={`Gallery image ${currentIndex + 1}`}
              fill
              style={{ objectFit: 'contain' }}
            />
          </div>
          <button className="fullscreen-nav prev" onClick={prevSlide}>
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>
          <button className="fullscreen-nav next" onClick={nextSlide}>
            <FontAwesomeIcon icon={faChevronRight} />
          </button>
        </div>
      )}
    </section>
  );
}