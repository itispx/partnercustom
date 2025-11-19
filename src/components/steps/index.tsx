"use client";

import styles from "./steps.module.scss";
import Image from "next/image";

interface Step {
  id: number;
  icon: string;
  title: string;
  description: string;
  variant: "light" | "dark";
}

export interface IStepsProps {
  title: string;
  subtitle: string;
  steps: Step[];
}

const Steps: React.FC<IStepsProps> = ({ title, subtitle, steps }) => {
  return (
    <section className={styles.container}>
      <div className={styles.header}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.subtitle}>{subtitle}</p>
      </div>

      <div className={styles.stepsGrid}>
        {steps.map((step) => (
          <div key={step.id} className={`${styles.stepCard} ${styles[step.variant]}`}>
            <div className={styles.iconWrapper}>
              <Image src={step.icon} alt={step.title} width={80} height={80} />
            </div>
            <h3 className={styles.stepTitle}>{step.title}</h3>
            <p className={styles.stepDescription}>{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Steps;
