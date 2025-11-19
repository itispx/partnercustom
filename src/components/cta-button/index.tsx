import styles from "./cta-button.module.scss";

const CtaButton: React.FC = () => {
  return (
    <div className={styles.ctaWrapper}>
      <button className={styles.ctaButton}>Veja os ônibus exclusivos</button>
    </div>
  );
};

export default CtaButton;
