"use client";

import styles from "./showcase.module.scss";

import Image from "next/image";

interface IMedia {
  src: string;
  alt: string;
}

const media: IMedia[] = [
  {
    src: "/showcase/1.jpg",
    alt: "1",
  },
  {
    src: "/showcase/2.jpg",
    alt: "2",
  },
  {
    src: "/showcase/3.jpg",
    alt: "3",
  },
  {
    src: "/showcase/4.jpg",
    alt: "4",
  },
];

const Showcase = () => {
  return (
    <section className={styles.wrapper} aria-label="Showcase">
      <div className={styles.grid}>
        <div className={styles.colLeft}>
          <h1 className={styles.title}>
            Da sua ideia à estrada: <em className={styles.highlight}>motorhomes exclusivos.</em>
          </h1>
          <div className={styles.mediaCard}>
            <Image
              src={media[0].src}
              alt={media[0].alt}
              fill
              className={styles.media}
              sizes="(min-width: 1024px) 30vw, 100vw"
            />
          </div>
        </div>

        <div className={styles.colMiddle}>
          <div className={`${styles.mediaCard} ${styles.tall}`}>
            <Image
              src={media[1].src}
              alt={media[1].alt}
              fill
              className={styles.media}
              sizes="(min-width: 1024px) 25vw, 100vw"
            />
          </div>
        </div>

        <div className={styles.colRight}>
          <div className={styles.mediaCard}>
            <Image
              src={media[2].src}
              alt={media[2].alt}
              fill
              className={styles.media}
              sizes="(min-width: 1024px) 25vw, 100vw"
            />
          </div>
          <div className={styles.mediaCard}>
            <Image
              src={media[3].src}
              alt={media[3].alt}
              fill
              className={styles.media}
              sizes="(min-width: 1024px) 25vw, 100vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Showcase;
