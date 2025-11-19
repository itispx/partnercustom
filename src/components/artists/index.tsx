"use client";

import styles from "./artists.module.scss";
import Image from "next/image";
import React, { useState, useRef, useCallback, useEffect, useMemo } from "react";

const artists = [
  { id: 1, name: "Alemão do Forró", image: "/artistas/alemao-do-forro.png" },
  { id: 2, name: "Banda Grafith", image: "/artistas/banda-grafith.png" },
  { id: 3, name: "Clayton & Romário", image: "/artistas/clayton-e-romario.png" },
  { id: 4, name: "Edson & Hudson", image: "/artistas/edson-e-hudson.png" },
  { id: 5, name: "Gustavo Mioto", image: "/artistas/gustavo-mioto.png" },
  { id: 6, name: "Henry Freitas", image: "/artistas/henry-freitas.png" },
  { id: 7, name: "Ícaro e Gilmar", image: "/artistas/icaro-e-gilmar.png" },
  { id: 8, name: "João Gomes", image: "/artistas/joao-gomes.png" },
  { id: 9, name: "João Neto & Frederico", image: "/artistas/joao-neto-e-frederico.png" },
  { id: 10, name: "Natanzinho Lima", image: "/artistas/natanzinho-lima.png" },
  { id: 11, name: "Nattan", image: "/artistas/nattan.png" },
  { id: 12, name: "Pablo", image: "/artistas/pablo.png" },
  { id: 13, name: "Solange Almeida", image: "/artistas/solange-almeida.png" },
  { id: 14, name: "Tarcísio do Acordeon", image: "/artistas/tarcisio-do-acordeon.png" },
  { id: 15, name: "Tchê Chaleira", image: "/artistas/tche-chaleira.png" },
  { id: 16, name: "Teodoro & Sampaio", image: "/artistas/teodoro-e-sampaio.png" },
  { id: 17, name: "Zé Cantor", image: "/artistas/ze-cantor.png" },
  { id: 18, name: "Zezo Potiguar", image: "/artistas/zezo-potiguar.png" },
];

const Artists = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const scrollRef = useRef<HTMLDivElement>(null);
  const loopWidthRef = useRef(0);
  const isJumpingRef = useRef(false);

  const autoplayRef = useRef<number | null>(null);

  const loopedArtists = useMemo(() => {
    return [...artists, ...artists, ...artists].map((a, i) => ({
      ...a,
      _loopKey: `${a.id}-${i}`,
    }));
  }, []);

  const recalcAndCenter = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;

    const totalContent = el.scrollWidth;
    const oneLoop = totalContent / 3;

    loopWidthRef.current = oneLoop;

    isJumpingRef.current = true;
    el.scrollLeft = oneLoop;

    requestAnimationFrame(() => {
      isJumpingRef.current = false;
    });
  }, []);

  useEffect(() => {
    recalcAndCenter();

    const handleResize = () => recalcAndCenter();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [recalcAndCenter]);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const speed = 0.3;
    let accumulatedScroll = 0;
    const cancelAnimation = (ref: React.RefObject<number | null>) => {
      if (ref.current) cancelAnimationFrame(ref.current);
    };

    const step = () => {
      if (!isDragging) {
        accumulatedScroll += speed;

        if (accumulatedScroll >= 1) {
          const pixelsToScroll = Math.floor(accumulatedScroll);
          el.scrollLeft += pixelsToScroll;
          accumulatedScroll -= pixelsToScroll;
        }

        autoplayRef.current = requestAnimationFrame(step);
      } else {
        cancelAnimation(autoplayRef);
      }
    };

    autoplayRef.current = requestAnimationFrame(step);

    return () => {
      cancelAnimation(autoplayRef);
    };
  }, [isDragging]);

  const handleScroll = useCallback(() => {
    const el = scrollRef.current;
    if (!el || isJumpingRef.current) return;

    const oneLoop = loopWidthRef.current;
    if (oneLoop === 0) return;

    const x = el.scrollLeft;
    const maxX = el.scrollWidth - el.clientWidth;

    const leftThreshold = oneLoop * 0.25;
    const rightThreshold = oneLoop * 2 - el.clientWidth - oneLoop * 0.25;

    if (x < leftThreshold) {
      isJumpingRef.current = true;
      el.scrollLeft = x + oneLoop;
      requestAnimationFrame(() => {
        isJumpingRef.current = false;
      });
    } else if (x > rightThreshold) {
      isJumpingRef.current = true;
      el.scrollLeft = x - oneLoop;
      requestAnimationFrame(() => {
        isJumpingRef.current = false;
      });
    }

    if (x <= 0 || x >= maxX) {
      recalcAndCenter();
    }
  }, [recalcAndCenter]);

  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    setIsDragging(true);
    if (scrollRef.current) {
      setStartX(e.clientX);
      setScrollLeft(scrollRef.current.scrollLeft);
    }
  }, []);

  const handleMouseLeave = useCallback(() => {
    if (isDragging) setIsDragging(false);
  }, [isDragging]);

  // Add this new useEffect for global mouse handling
  useEffect(() => {
    if (!isDragging) return;

    const handleGlobalMouseMove = (e: MouseEvent) => {
      if (!scrollRef.current) return;
      const offset = e.clientX - startX;
      scrollRef.current.scrollLeft = scrollLeft - offset;
    };

    const handleGlobalMouseUp = () => {
      setIsDragging(false);
    };

    document.addEventListener("mousemove", handleGlobalMouseMove);
    document.addEventListener("mouseup", handleGlobalMouseUp);

    return () => {
      document.removeEventListener("mousemove", handleGlobalMouseMove);
      document.removeEventListener("mouseup", handleGlobalMouseUp);
    };
  }, [isDragging, startX, scrollLeft]);

  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    setIsDragging(true);
    if (scrollRef.current) {
      setStartX(e.touches[0].clientX);
      setScrollLeft(scrollRef.current.scrollLeft);
    }
  }, []);

  const handleTouchMove = useCallback(
    (e: React.TouchEvent) => {
      if (!isDragging || !scrollRef.current) return;
      const offset = e.touches[0].clientX - startX;
      scrollRef.current.scrollLeft = scrollLeft - offset;
    },
    [isDragging, startX, scrollLeft],
  );

  const handleTouchEnd = useCallback(() => setIsDragging(false), []);

  return (
    <section className={styles.container}>
      <h2 className={styles.title}>Artistas que confiam na Partner</h2>

      <div
        ref={scrollRef}
        className={styles.artistsScroll}
        onScroll={handleScroll}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        style={{ cursor: isDragging ? "grabbing" : "grab" }}
        aria-roledescription="carousel"
      >
        <div className={styles.artistsGrid}>
          {loopedArtists.map((artist, index) => (
            <div key={artist._loopKey} className={styles.artistCard}>
              <div className={styles.imageWrapper}>
                <Image
                  src={artist.image}
                  alt={artist.name}
                  width={300}
                  height={300}
                  className={styles.artistImage}
                  draggable={false}
                  loading={index < artists.length ? "eager" : "lazy"}
                />
              </div>
              <h3 className={styles.artistName}>{artist.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Artists;
