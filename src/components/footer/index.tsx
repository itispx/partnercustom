"use client";

import Image from "next/image";
import Link from "next/link";
import styles from "./footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.container}>
      <div className={styles.content}>
        <div className={styles.topSection}>
          <div className={styles.logoSection}>
            <Image src="/logos/preto.png" alt="Partner Custom" width={200} height={80} className={styles.logo} />
          </div>

          <div className={styles.rightSection}>
            <div className={styles.socialSection}>
              <Link
                href="https://www.instagram.com/partnercustomm"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialIcon}
              >
                <Image src="/footer/instagram.svg" alt="Instagram" width={24} height={24} />
              </Link>
              <Link
                href="https://www.facebook.com/partnercustomm/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialIcon}
              >
                <Image src="/footer/facebook.svg" alt="Facebook" width={24} height={24} />
              </Link>
              <Link
                href="https://www.youtube.com/channel/UCscmyYHG6tvwurnxlpdMtcw"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialIcon}
              >
                <Image src="/footer/youtube.svg" alt="YouTube" width={24} height={24} />
              </Link>
              <Link
                href="https://wa.me/5551980705624"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialIcon}
              >
                <Image src="/footer/whatsapp.svg" alt="WhatsApp" width={24} height={24} />
              </Link>
            </div>

            <div className={styles.addressSection}>
              <Image src="/footer/pin.svg" alt="Localização" width={20} height={20} />
              <span>R Estância Velha, 1298 - Portão Velho, Portão</span>
            </div>
          </div>
        </div>

        <div className={styles.bottomSection}>
          <nav className={styles.navigation}>
            <Link href="/" className={styles.navLink}>
              Home
            </Link>
            <Link href="/sobre" className={styles.navLink}>
              Sobre nós
            </Link>
            <Link href="/#modelos" className={styles.navLink}>
              Modelos
            </Link>
          </nav>

          <div className={styles.copyright}>
            <span>© Copyright 2025 Partner Custom</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
