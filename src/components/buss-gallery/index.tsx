"use client";

import styles from "./buss-gallery.module.scss";

import Image from "next/image";

import { useState } from "react";

export interface Image {
  id: number;
  name: string;
  url: string;
  category: string;
}

export interface IBussGallery {
  title: string;
  tabs: string[];
  images: Image[];
  defaultTab?: string;
}

const BussGallery: React.FC<IBussGallery> = ({ title, tabs, images, defaultTab }) => {
  const [activeTab, setActiveTab] = useState(defaultTab);
  const [visibleCount, setVisibleCount] = useState(7);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredImages = activeTab === defaultTab ? images : images.filter((img) => img.category === activeTab);
  const displayedImages = filteredImages.slice(0, visibleCount);
  const hasMore = filteredImages.length > visibleCount;

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    setVisibleCount(7);
  };

  const handleShowMore = () => {
    setVisibleCount((prev) => prev + 4);
  };

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const goToNext = () => {
    if (lightboxIndex !== null && lightboxIndex < displayedImages.length - 1) {
      setLightboxIndex(lightboxIndex + 1);
    }
  };

  const goToPrevious = () => {
    if (lightboxIndex !== null && lightboxIndex > 0) {
      setLightboxIndex(lightboxIndex - 1);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowRight") goToNext();
    if (e.key === "ArrowLeft") goToPrevious();
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>{title}</h2>

      <div className={styles.tabs}>
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`${styles.tab} ${activeTab === tab ? styles.active : ""}`}
            onClick={() => handleTabChange(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className={styles.grid}>
        {displayedImages.map((img, index) => (
          <div key={img.id} onClick={() => openLightbox(index)} style={{ cursor: "pointer" }}>
            <Image src={img.url} alt={img.name} width={800} height={600} />
          </div>
        ))}
      </div>

      {hasMore && (
        <div className={styles.showMoreContainer}>
          <button className={styles.showMoreButton} onClick={handleShowMore}>
            Veja mais fotos
          </button>
        </div>
      )}

      {lightboxIndex !== null && (
        <div className={styles.lightbox} onClick={closeLightbox} onKeyDown={handleKeyDown} tabIndex={0}>
          <div className={styles.lightboxContent} onClick={(e) => e.stopPropagation()}>
            <button className={styles.closeButton} onClick={closeLightbox}>
              ×
            </button>

            {lightboxIndex > 0 && (
              <button className={styles.navButton + " " + styles.prevButton} onClick={goToPrevious}>
                ‹
              </button>
            )}

            <div className={styles.imageWrapper}>
              <Image
                src={displayedImages[lightboxIndex].url}
                alt={displayedImages[lightboxIndex].name}
                width={1200}
                height={900}
                style={{ objectFit: "contain" }}
              />
            </div>

            {lightboxIndex < displayedImages.length - 1 && (
              <button className={styles.navButton + " " + styles.nextButton} onClick={goToNext}>
                ›
              </button>
            )}

            <div className={styles.imageCounter}>
              {lightboxIndex + 1} / {displayedImages.length}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BussGallery;
