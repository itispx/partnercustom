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
            <Image src="/logo.png" alt="Partner Custom" width={200} height={80} className={styles.logo} />
          </div>

          <div className={styles.rightSection}>
            <div className={styles.socialSection}>
              <Link
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialIcon}
              >
                <Image src="/icons/instagram.svg" alt="Instagram" width={24} height={24} />
              </Link>
              <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
                <Image src="/icons/facebook.svg" alt="Facebook" width={24} height={24} />
              </Link>
              <Link href="https://youtube.com" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
                <Image src="/icons/youtube.svg" alt="YouTube" width={24} height={24} />
              </Link>
              <Link href="https://whatsapp.com" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
                <Image src="/icons/whatsapp.svg" alt="WhatsApp" width={24} height={24} />
              </Link>
            </div>

            <div className={styles.addressSection}>
              <Image src="/icons/location.svg" alt="Localização" width={20} height={20} />
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
            <Link href="/modelos" className={styles.navLink}>
              Modelos
            </Link>
          </nav>

          <div className={styles.copyright}>
            <span>© Copyright 2025 Partner Custom</span>
            <Link href="/termos" className={styles.termsLink}>
              Termos e privacidade
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
