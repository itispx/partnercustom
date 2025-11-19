"use client";

import styles from "./partners.module.scss";
import Image from "next/image";
import React, { useState, useEffect, useCallback, useRef } from "react";

const partners = [
  { id: 1, alt: "Shopping do Motorhome", image: "/parceiros/shopping-do-motorhome.png" },
  { id: 2, alt: "Eurohome Motorhomes", image: "/parceiros/eurohome-motorhomes.png" },
  { id: 3, alt: "Victron Energy Blue Power", image: "/parceiros/victron-energy.png" },
  { id: 4, alt: "Marco Polo", image: "/parceiros/marco-polo.jpg" },
];

const Partners = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [isScrollable, setIsScrollable] = useState(false);

  const scrollRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const update = () => setIsScrollable(el.scrollWidth > el.clientWidth);
    update();

    const ro = new ResizeObserver(update);
    ro.observe(el);
    if (gridRef.current) ro.observe(gridRef.current);

    window.addEventListener("resize", update);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", update);
    };
  }, []);

  const handleMouseDown = useCallback(
    (e: React.MouseEvent) => {
      if (!isScrollable) return;
      e.preventDefault();
      setIsDragging(true);
      if (scrollRef.current) {
        setStartX(e.clientX);
        setScrollLeft(scrollRef.current.scrollLeft);
      }
    },
    [isScrollable],
  );

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (!isScrollable || !isDragging || !scrollRef.current) return;
      const offset = e.clientX - startX;
      scrollRef.current.scrollLeft = scrollLeft - offset;
    },
    [isScrollable, isDragging, startX, scrollLeft],
  );

  const handleMouseUp = useCallback(() => setIsDragging(false), []);
  const handleMouseLeave = useCallback(() => {
    if (isDragging) setIsDragging(false);
  }, [isDragging]);

  const handleTouchStart = useCallback(
    (e: React.TouchEvent) => {
      if (!isScrollable) return;
      setIsDragging(true);
      if (scrollRef.current) {
        setStartX(e.touches[0].clientX);
        setScrollLeft(scrollRef.current.scrollLeft);
      }
    },
    [isScrollable],
  );

  const handleTouchMove = useCallback(
    (e: React.TouchEvent) => {
      if (!isScrollable || !isDragging || !scrollRef.current) return;
      const offset = e.touches[0].clientX - startX;
      scrollRef.current.scrollLeft = scrollLeft - offset;
    },
    [isScrollable, isDragging, startX, scrollLeft],
  );

  const handleTouchEnd = useCallback(() => setIsDragging(false), []);

  return (
    <section className={styles.container}>
      <h2 className={styles.title}>Parceiros na Sua Próxima Jornada</h2>
      <p className={styles.subtitle}>Rápido e simples, um processo onde você faz parte do começo ao fim.</p>

      <div
        ref={scrollRef}
        className={`${styles.scroll} ${!isScrollable ? styles.noScroll : ""}`}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        style={{ cursor: isScrollable && isDragging ? "grabbing" : isScrollable ? "grab" : "default" }}
        aria-roledescription="carousel"
      >
        <div ref={gridRef} className={`${styles.grid} ${!isScrollable ? styles.centered : ""}`}>
          {partners.map((p, index) => (
            <div key={p.id} className={styles.imageWrapper}>
              <Image
                src={p.image}
                alt={p.alt}
                width={0}
                height={160}
                sizes="100vw"
                className={styles.image}
                draggable={false}
                loading={index < 6 ? "eager" : "lazy"}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
