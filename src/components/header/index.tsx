"use client";

import styles from "./header.module.scss";

import Link from "next/link";
import Image from "next/image";

import { useState, useEffect } from "react";

interface IHeaderProps {
  logoSrc: string;
  logoAlt: string;
}

const Header = (props: IHeaderProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isMobileMenuOpen]);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/sobre", label: "Sobre nós" },
    { href: "/modelos", label: "Modelos" },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ""}`} role="banner">
      <div className={styles.container}>
        <Link href="/" className={styles.logo} aria-label="Home" onClick={closeMobileMenu}>
          <Image
            src={props.logoSrc}
            alt={props.logoAlt}
            width={100}
            height={100}
            priority
            className={styles.logoImage}
          />
        </Link>

        <nav className={styles.nav} aria-label="Main navigation">
          <ul className={styles.navList}>
            {navItems.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className={styles.navLink}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <Link href="/comece-seu-projeto" className={styles.ctaButton}>
          Comece o seu projeto
        </Link>

        <button
          className={`${styles.mobileMenuButton} ${isMobileMenuOpen ? styles.open : ""}`}
          onClick={toggleMobileMenu}
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-menu"
        >
          <span className={styles.hamburger}></span>
          <span className={styles.hamburger}></span>
          <span className={styles.hamburger}></span>
        </button>
      </div>

      <div className={`${styles.mobileMenuOverlay} ${isMobileMenuOpen ? styles.open : ""}`} id="mobile-menu">
        <nav className={styles.mobileNav} aria-label="Mobile navigation">
          <ul className={styles.mobileNavList}>
            {navItems.map((item, index) => (
              <li key={item.href} style={{ "--item-index": index } as React.CSSProperties}>
                <Link href={item.href} className={styles.mobileNavLink} onClick={closeMobileMenu}>
                  {item.label}
                </Link>
              </li>
            ))}
            <li className={styles.mobileCta} style={{ "--item-index": navItems.length } as React.CSSProperties}>
              <Link href="/comece-seu-projeto" className={styles.mobileCtaButton} onClick={closeMobileMenu}>
                Comece o seu projeto
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
