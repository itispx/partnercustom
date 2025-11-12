"use client";

import styles from "./history-video.module.scss";

import Image from "next/image";

import { useState } from "react";

const HistoryVideo = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const videoData = {
    thumbnail: "https://img.youtube.com/vi/ASO_zypdnsQ/maxresdefault.jpg",
    youtubeId: "ASO_zypdnsQ",
    title: "Assistir vídeo completo da história",
  };

  const handlePlayVideo = () => {
    setIsPlaying(true);
  };

  return (
    <section className={styles.container}>
      <div className={styles.videoContainer}>
        {isPlaying ? (
          <div className={styles.videoWrapper}>
            <iframe
              className={styles.iframe}
              src={`https://www.youtube.com/embed/${videoData.youtubeId}?autoplay=1&controls=1&modestbranding=1&rel=0`}
              title={videoData.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        ) : (
          <div className={styles.thumbnail} onClick={handlePlayVideo}>
            <Image
              className={styles.thumbnailImage}
              src={videoData.thumbnail}
              alt={videoData.title}
              fill
              sizes="100vw"
              style={{ objectFit: "cover" }}
              unoptimized
              priority
            />
            <div className={styles.overlay} />
            <div className={styles.playButtonWrapper}>
              <button className={styles.playButton} aria-label="Reproduzir vídeo">
                <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="40" cy="40" r="38" stroke="white" strokeWidth="2" opacity="0.8" />
                  <path d="M32 26L56 40L32 54V26Z" fill="white" />
                </svg>
              </button>
              <p className={styles.caption}>{videoData.title}</p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default HistoryVideo;
