"use client";

import styles from "./process.module.scss";

const Process = () => {
  const steps = [
    {
      id: 1,
      icon: (
        <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="10" y="25" width="60" height="35" rx="4" stroke="currentColor" strokeWidth="2.5" />
          <rect x="15" y="30" width="15" height="10" rx="2" fill="currentColor" />
          <rect x="35" y="30" width="15" height="10" rx="2" fill="currentColor" />
          <rect x="55" y="30" width="10" height="10" rx="2" fill="currentColor" />
          <path d="M25 60 L25 65 L55 65 L55 60" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
          <circle cx="40" cy="20" r="3" fill="currentColor" />
          <path d="M15 45 L65 45" stroke="currentColor" strokeWidth="2.5" />
        </svg>
      ),
      title: "Modelo",
      description: "Procure o modelo perfeito para você, sua família ou artista.",
      variant: "light" as const,
    },
    {
      id: 2,
      icon: (
        <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="35" cy="30" r="12" stroke="currentColor" strokeWidth="2.5" />
          <path d="M35 38 L35 55" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
          <path
            d="M25 48 L35 55 L45 48"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="55" cy="50" r="8" stroke="currentColor" strokeWidth="2.5" />
          <path d="M60 55 L65 60" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
          <circle cx="35" cy="30" r="5" fill="currentColor" />
        </svg>
      ),
      title: "Exclusividade garantida",
      description:
        "Converse com o nosso setor comercial ou, até mesmo, visite a nossa fábrica para alinhar toda a sua montagem e personalização",
      variant: "dark" as const,
    },
    {
      id: 3,
      icon: (
        <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M40 20 L40 35" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
          <circle cx="40" cy="15" r="4" fill="currentColor" />
          <path d="M25 40 L55 40 L50 60 L30 60 Z" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round" />
          <path d="M30 60 L30 65 M50 60 L50 65" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
          <path
            d="M32 45 L40 50 L48 42"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
        </svg>
      ),
      title: "Pronto para viagem",
      description:
        "Receba uma entrega onde você irá aprender todas as funcionalidades do seu novo lar sobre rodas e você já está pronto para viajar",
      variant: "light" as const,
    },
  ];

  return (
    <section className={styles.container}>
      <div className={styles.header}>
        <h2 className={styles.title}>Nosso processo de montagem</h2>
        <p className={styles.subtitle}>Rápido e simples, um processo onde você faz parte do começo ao fim.</p>
      </div>

      <div className={styles.stepsGrid}>
        {steps.map((step) => (
          <div key={step.id} className={`${styles.stepCard} ${styles[step.variant]}`}>
            <div className={styles.iconWrapper}>{step.icon}</div>
            <h3 className={styles.stepTitle}>{step.title}</h3>
            <p className={styles.stepDescription}>{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Process;
