"use client";

import React from "react";
import styles from "./showcase.module.scss";
import Image from "next/image";

export interface IMedia {
  src: string;
  alt: string;
}

export interface IShowcaseProps {
  title: string;
  highlight: string;
  media: IMedia[];
}

const Showcase: React.FC<IShowcaseProps> = ({ title, highlight, media }) => {
  return (
    <section className={styles.wrapper} aria-label="Showcase">
      <div className={styles.grid}>
        <div className={styles.colLeft}>
          <h1 className={styles.title}>
            {title} <em className={styles.highlight}>{highlight}</em>
          </h1>
          {media[0] && (
            <div className={styles.mediaCard}>
              <Image
                src={media[0].src}
                alt={media[0].alt}
                fill
                className={styles.media}
                sizes="(min-width: 1024px) 30vw, 100vw"
              />
            </div>
          )}
        </div>

        <div className={styles.colMiddle}>
          {media[1] && (
            <div className={`${styles.mediaCard} ${styles.tall}`}>
              <Image
                src={media[1].src}
                alt={media[1].alt}
                fill
                className={styles.media}
                sizes="(min-width: 1024px) 25vw, 100vw"
              />
            </div>
          )}
        </div>

        <div className={styles.colRight}>
          {media[2] && (
            <div className={styles.mediaCard}>
              <Image
                src={media[2].src}
                alt={media[2].alt}
                fill
                className={styles.media}
                sizes="(min-width: 1024px) 25vw, 100vw"
              />
            </div>
          )}
          {media[3] && (
            <div className={styles.mediaCard}>
              <Image
                src={media[3].src}
                alt={media[3].alt}
                fill
                className={styles.media}
                sizes="(min-width: 1024px) 25vw, 100vw"
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Showcase;
