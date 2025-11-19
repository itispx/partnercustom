"use client";

import styles from "./hero-slider.module.scss";

import Image from "next/image";

import { useState, useEffect, useCallback, useRef } from "react";

export interface ISlide {
  id: number;
  image: string;
  alt: string;
  title?: string;
  subtitle?: string;
}

export interface IHeroSliderProps {
  slides: ISlide[];
  enableAutoplay?: boolean;
  autoplayDelay?: number;
  enableSliding?: boolean;
}

const HeroSlider: React.FC<IHeroSliderProps> = ({ slides, enableAutoplay, autoplayDelay, enableSliding }) => {
  const [currentSlide, setCurrentSlide] = useState(1);
  const [isAnimating, setIsAnimating] = useState(false);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const autoplayRef = useRef<NodeJS.Timeout | null>(null);

  const totalSlides = slides.length;

  const infiniteSlides = [slides[slides.length - 1], ...slides, slides[0]];

  const goToSlide = useCallback(
    (index: number) => {
      if (isAnimating || !enableSliding) return;

      setIsAnimating(true);
      setIsTransitioning(true);
      setCurrentSlide(index);

      setTimeout(() => {
        setIsAnimating(false);
      }, 600);
    },
    [isAnimating, enableSliding],
  );

  const nextSlide = useCallback(() => {
    goToSlide(currentSlide + 1);
  }, [currentSlide, goToSlide]);

  const prevSlide = useCallback(() => {
    goToSlide(currentSlide - 1);
  }, [currentSlide, goToSlide]);

  useEffect(() => {
    if (currentSlide === 0) {
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrentSlide(totalSlides);
      }, 600);
    } else if (currentSlide === totalSlides + 1) {
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrentSlide(1);
      }, 600);
    }
  }, [currentSlide, totalSlides]);

  useEffect(() => {
    if (!enableAutoplay || !enableSliding) return;

    autoplayRef.current = setInterval(() => {
      nextSlide();
    }, autoplayDelay);

    return () => {
      if (autoplayRef.current) {
        clearInterval(autoplayRef.current);
      }
    };
  }, [nextSlide, enableAutoplay, autoplayDelay, enableSliding]);

  const resetAutoplay = useCallback(() => {
    if (!enableAutoplay) return;

    if (autoplayRef.current) {
      clearInterval(autoplayRef.current);
    }

    autoplayRef.current = setInterval(() => {
      nextSlide();
    }, autoplayDelay);
  }, [nextSlide, enableAutoplay, autoplayDelay]);

  const handleTouchStart = (e: React.TouchEvent) => {
    if (!enableSliding) return;
    setTouchStart(e.touches[0].clientX);
    setIsDragging(true);
    resetAutoplay();
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging || !enableSliding) return;
    const currentTouch = e.touches[0].clientX;
    setTouchEnd(currentTouch);
    setDragOffset(currentTouch - touchStart);
  };

  const handleTouchEnd = () => {
    if (!isDragging || !enableSliding) return;

    const swipeThreshold = 50;
    const swipeDistance = touchStart - touchEnd;

    if (Math.abs(swipeDistance) > swipeThreshold) {
      if (swipeDistance > 0) {
        nextSlide();
      } else {
        prevSlide();
      }
    }

    setIsDragging(false);
    setDragOffset(0);
    setTouchStart(0);
    setTouchEnd(0);
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!enableSliding) return;
    e.preventDefault();
    setTouchStart(e.clientX);
    setIsDragging(true);
    resetAutoplay();
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !enableSliding) return;
    setTouchEnd(e.clientX);
    setDragOffset(e.clientX - touchStart);
  };

  const handleMouseUp = () => {
    if (!isDragging || !enableSliding) return;

    const swipeThreshold = 50;
    const swipeDistance = touchStart - touchEnd;

    if (Math.abs(swipeDistance) > swipeThreshold) {
      if (swipeDistance > 0) {
        nextSlide();
      } else {
        prevSlide();
      }
    }

    setIsDragging(false);
    setDragOffset(0);
    setTouchStart(0);
    setTouchEnd(0);
  };

  const handleMouseLeave = () => {
    if (isDragging) {
      handleMouseUp();
    }
  };

  useEffect(() => {
    if (!enableSliding) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        prevSlide();
        resetAutoplay();
      } else if (e.key === "ArrowRight") {
        nextSlide();
        resetAutoplay();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [nextSlide, prevSlide, resetAutoplay, enableSliding]);

  return (
    <section className={styles.heroSlider} aria-roledescription="carousel" aria-label="Image carousel">
      <div
        className={styles.slidesContainer}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
        style={{
          transform: isDragging
            ? `translateX(calc(-${currentSlide * 100}% + ${dragOffset}px))`
            : `translateX(-${currentSlide * 100}%)`,
          transition: isTransitioning && !isDragging ? "transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)" : "none",
          cursor: enableSliding ? (isDragging ? "grabbing" : "grab") : "default",
        }}
      >
        {infiniteSlides.map((slide, index) => {
          const actualIndex = index === 0 ? totalSlides - 1 : index === infiniteSlides.length - 1 ? 0 : index - 1;

          return (
            <div
              key={`${slide.id}-${index}`}
              className={styles.slide}
              aria-roledescription="slide"
              aria-label={`${actualIndex + 1} of ${totalSlides}`}
              aria-hidden={currentSlide !== index}
            >
              <Image
                src={slide.image}
                alt={slide.alt}
                fill
                priority={index === 1}
                quality={90}
                className={styles.slideImage}
                sizes="100vw"
                draggable={false}
              />

              {(slide.title || slide.subtitle) && (
                <div className={styles.slideContent}>
                  {slide.title && <h2 className={styles.slideTitle}>{slide.title}</h2>}
                  {slide.subtitle && <p className={styles.slideSubtitle}>{slide.subtitle}</p>}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default HeroSlider;
