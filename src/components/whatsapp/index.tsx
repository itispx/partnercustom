import Image from "next/image";
import Link from "next/link";
import styles from "./whatsapp.module.scss";

const Whatsapp = () => {
  return (
    <Link
      href="https://wa.me/5551980705624"
      target="_blank"
      rel="noopener noreferrer"
      className={styles.wrapper}
      aria-label="Chat with us on WhatsApp"
    >
      <div className={styles.button}>
        <Image src="/whatsapp.svg" alt="Whatsapp icon" width={50} height={50} priority />
      </div>
    </Link>
  );
};

export default Whatsapp;
