import styles from "./differentials.module.scss";

import Image from "next/image";

export interface IDifferentialsProps {
  features: {
    icon?: string;
    title: string;
    description: string;
  }[];
}

const Differentials: React.FC<IDifferentialsProps> = ({ features }) => {
  return (
    <div className={styles.differentials}>
      <div className={styles.differentials__container}>
        {features.map((feature, index) => (
          <div key={index} className={styles.differentials__item}>
            <div className={styles.differentials__header}>
              {feature.icon && (
                <div className={styles.differentials__icon}>
                  <Image src={feature.icon} alt="" width={24} height={24} />
                </div>
              )}
              <h3 className={styles.differentials__title}>{feature.title}</h3>
            </div>
            <p className={styles.differentials__description}>{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Differentials;
