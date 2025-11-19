"use client";

import styles from "./image-gallery.module.scss";
import React, { useState } from "react";
import Image from "next/image";

type Category = "external" | "internal";

export interface IImageGalleryProps {
  images: {
    external: string[];
    internal: string[];
  };
}

const ImageGallery: React.FC<IImageGalleryProps> = ({ images }) => {
  const [activeCategory, setActiveCategory] = useState<Category>("external");
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const currentImages = images[activeCategory] || [];

  const handleCategoryChange = (category: Category) => {
    setActiveCategory(category);
    setActiveIndex(0);
  };

  const handlePrevious = () => {
    setActiveIndex((prev) => (prev === 0 ? currentImages.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === currentImages.length - 1 ? 0 : prev + 1));
  };

  const handleThumbnailClick = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <div className={styles.gallery}>
      <div className={styles.gallery__main}>
        <div className={styles.gallery__controls}>
          <button
            className={`${styles.gallery__filterBtn} ${activeCategory === "external" ? styles.active : ""}`}
            onClick={() => handleCategoryChange("external")}
          >
            Fotos externas
          </button>
          <button
            className={`${styles.gallery__filterBtn} ${activeCategory === "internal" ? styles.active : ""}`}
            onClick={() => handleCategoryChange("internal")}
          >
            Fotos internas
          </button>
        </div>

        <div className={styles.gallery__navControls}>
          <button className={styles.gallery__nav} onClick={handlePrevious} aria-label="Previous image">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
          <button className={styles.gallery__nav} onClick={handleNext} aria-label="Next image">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </div>

        <div className={styles.gallery__mainImage}>
          {currentImages.length > 0 && (
            <Image
              src={currentImages[activeIndex]}
              alt={`${activeCategory} view ${activeIndex + 1}`}
              fill
              sizes="(max-width: 768px) 100vw, 1200px"
              style={{ objectFit: "cover" }}
              priority={activeIndex === 0}
            />
          )}
        </div>
      </div>

      <div className={styles.gallery__thumbnails}>
        <div className={styles.gallery__thumbnailsWrapper}>
          {currentImages.map((image, index) => (
            <button
              key={index}
              className={`${styles.gallery__thumbnail} ${index === activeIndex ? styles.active : ""}`}
              onClick={() => handleThumbnailClick(index)}
            >
              <Image src={image} alt={`Thumbnail ${index + 1}`} fill sizes="150px" style={{ objectFit: "cover" }} />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageGallery;
