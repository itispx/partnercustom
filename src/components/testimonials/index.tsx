"use client";

import styles from "./testimonials.module.scss";
import Image from "next/image";
import { useState, useRef, useCallback } from "react";

interface Testimonial {
  id: number;
  thumbnail: string;
  youtubeId: string;
  title: string;
  caption?: string;
}

export interface ITestimonialsProps {
  title: string;
  testimonials: Testimonial[];
}

const Testimonials: React.FC<ITestimonialsProps> = ({ title, testimonials }) => {
  const [activeVideo, setActiveVideo] = useState<number | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const handlePlayVideo = useCallback(
    (id: number) => {
      if (Math.abs(dragOffset) < 5) {
        setActiveVideo(id);
      }
    },
    [dragOffset],
  );

  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    setIsDragging(true);
    if (scrollRef.current) {
      setStartX(e.clientX);
      setScrollLeft(scrollRef.current.scrollLeft);
    }
  }, []);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (!isDragging || !scrollRef.current) return;

      const x = e.clientX;
      const offset = x - startX;
      setDragOffset(offset);
      scrollRef.current.scrollLeft = scrollLeft - offset;
    },
    [isDragging, startX, scrollLeft],
  );

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
    setTimeout(() => setDragOffset(0), 100);
  }, []);

  const handleMouseLeave = useCallback(() => {
    if (isDragging) {
      setIsDragging(false);
      setTimeout(() => setDragOffset(0), 100);
    }
  }, [isDragging]);

  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    setIsDragging(true);
    if (scrollRef.current) {
      setStartX(e.touches[0].clientX);
      setScrollLeft(scrollRef.current.scrollLeft);
    }
  }, []);

  const handleTouchMove = useCallback(
    (e: React.TouchEvent) => {
      if (!isDragging || !scrollRef.current) return;

      const x = e.touches[0].clientX;
      const offset = x - startX;
      setDragOffset(offset);
      scrollRef.current.scrollLeft = scrollLeft - offset;
    },
    [isDragging, startX, scrollLeft],
  );

  const handleTouchEnd = useCallback(() => {
    setIsDragging(false);
    setTimeout(() => setDragOffset(0), 100);
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.titleWrapper}>
        <h2 className={styles.title}>{title}</h2>
      </div>

      <div
        ref={scrollRef}
        className={styles.testimonialsScroll}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        style={{
          cursor: isDragging ? "grabbing" : "grab",
        }}
      >
        <div className={styles.testimonialsGrid}>
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className={styles.card}>
              {activeVideo === testimonial.id ? (
                <div className={styles.videoWrapper}>
                  <iframe
                    className={styles.iframe}
                    src={`https://www.youtube.com/embed/${testimonial.youtubeId}?autoplay=1&controls=1&modestbranding=1&rel=0`}
                    title={testimonial.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              ) : (
                <div className={styles.thumbnail} onClick={() => handlePlayVideo(testimonial.id)}>
                  <Image
                    className={styles.thumbnailImage}
                    src={testimonial.thumbnail}
                    alt={testimonial.title}
                    width={1280}
                    height={720}
                    unoptimized
                    draggable={false}
                  />
                  <div className={styles.playButtonWrapper}>
                    <button className={styles.playButton} aria-label="Reproduzir vídeo">
                      <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="30" cy="30" r="29" stroke="white" strokeWidth="2" opacity="0.9" />
                        <path d="M24 20L42 30L24 40V20Z" fill="white" />
                      </svg>
                    </button>
                  </div>
                  {testimonial.caption && <div className={styles.caption}>{testimonial.caption}</div>}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
