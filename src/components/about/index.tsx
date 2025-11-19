"use client";

import Image from "next/image";
import styles from "./about.module.scss";

const About = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <div className={styles.topSection}>
          <div className={styles.textSection}>
            <h2 className={styles.title}>
              A nossa história transformando <span className={styles.titleItalic}>sonhos em realidade</span>
            </h2>

            <p className={styles.description}>
              Lorem ipsum is a dummy or placeholder text commonly used in graphic design, publishing, and web
              development to fill empty spaces in a layout that does not yet have content.
            </p>

            <p className={styles.description}>
              Lorem ipsum is a dummy or placeholder text commonly used in graphic design, publishing, and web
              development to fill empty spaces in a layout that does not yet have content.
            </p>
          </div>

          <div className={styles.logoSection}>
            <Image src="/logos/preto.png" alt="Partner Custom" width={300} height={120} className={styles.logo} />
          </div>
        </div>

        <div className={styles.featuresSection}>
          <div className={styles.feature}>
            <h3 className={styles.featureTitle}>Inovação constante</h3>
            <p className={styles.featureDescription}>
              Cada projeto feito sob medida para refletir o estilo de vida e as necessidades únicas de cada cliente.
            </p>
          </div>

          <div className={styles.feature}>
            <h3 className={styles.featureTitle}>Qualidade Premium</h3>
            <p className={styles.featureDescription}>
              Excelência em materiais, tecnologia e acabamento, garantindo durabilidade e sofisticação.
            </p>
          </div>

          <div className={styles.feature}>
            <h3 className={styles.featureTitle}>Exclusividade</h3>
            <p className={styles.featureDescription}>
              transformar a estrada em uma experiência única, com luxo e comodidades que só um motorhome exclusivo pode
              oferecer.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
