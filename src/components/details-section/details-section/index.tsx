import styles from "./details-section.module.scss";

import Image from "next/image";

export interface IDetailItem {
  title: string;
  description: string;
  image: string;
  imagePosition: "left" | "right";
}

export interface IDetailsSectionProps {
  mainTitle: string;
  highlightText: string;
  items: IDetailItem[];
}

const DetailsSection: React.FC<IDetailsSectionProps> = ({ mainTitle, highlightText, items }) => {
  return (
    <div className={styles.details}>
      <div className={styles.details__divider}></div>

      <h2 className={styles.details__mainTitle}>
        {mainTitle} <span className={styles.details__highlight}>{highlightText}</span>
      </h2>

      <div className={styles.details__items}>
        {items.map((item, index) => (
          <div
            key={index}
            className={`${styles.details__item} ${
              item.imagePosition === "right" ? styles["details__item--reverse"] : ""
            }`}
          >
            <div className={styles.details__imageWrapper}>
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="(max-width: 768px) 100vw, 500px"
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className={styles.details__content}>
              <h3 className={styles.details__title}>{item.title}</h3>
              <p className={styles.details__description}>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DetailsSection;
