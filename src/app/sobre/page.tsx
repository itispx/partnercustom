import About from "@/components/about";
import styles from "./sobre.module.scss";
import Partners from "@/components/partners";
import HistoryVideo from "@/components/history-video";
import Team from "@/components/team";
import Contact from "@/components/contact";

export default function Sobre() {
  return (
    <>
      <div className={styles.titleContainer}>
        <h2 className={styles.title}>CONHEÇA A PARTNER CUSTOM</h2>
      </div>

      <About />

      <Partners />

      <HistoryVideo />

      <Team />

      <Contact />
    </>
  );
}
