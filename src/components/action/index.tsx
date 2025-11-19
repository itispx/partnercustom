"use client";

import Image from "next/image";
import styles from "./action.module.scss";

const Action = () => {
  return (
    <section className={styles.container}>
      <Image src="/cta/cta.png" alt="Camper background" fill priority className={styles.bgImage} />

      <div className={styles.overlay} />

      <div className={styles.content}>
        <h1 className={styles.title}>Sua casa perfeita sobre rodas começa aqui</h1>
        <p className={styles.subtitle}>Exclusividade, conforto e liberdade, em cada detalhe.</p>

        <div className={styles.ctaContainer}>
          <span className={styles.ctaText}>O seu sonho, em movimento.</span>
          <button className={styles.ctaButton}>Inicie o seu projeto</button>
        </div>
      </div>
    </section>
  );
};

export default Action;
