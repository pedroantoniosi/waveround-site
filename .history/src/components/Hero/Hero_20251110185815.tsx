import React from "react";
import styles from "./Index.module.css";

interface HeroProps {
  title?: string;
  children?: React.ReactNode;
}

const Hero = ({ title, children }: HeroProps) => {
  return (
    <section
      className={styles["hero-container"]}
      role="banner"
      aria-label="Hero"
    >
      <div className="hero-content col gap-2">
        <div className="hero-caption">
          <h1 className={styles["title"]}>{title}</h1>
          <p className={styles["text"]}>
            Domine cada partida com som de alta precisão. Nossos headsets
            entregam potência, clareza e resposta imediata — para quem exige o
            máximo em cada movimento.
          </p>
          {children}
        </div>

        <div className={styles["hero-slider"]}>
          <div className="row gap-2">
            <div className={styles["card"]}>Spotify</div>
            <div className={styles["card"]}>Deezer</div>
            <div className={styles["card"]}>ASUS</div>
            <div className={styles["card"]}>SoundCloud</div>
            <div className={styles["card"]}>YouTube Music</div>
            <div className={styles["card"]}>Shazam</div>
            <div className={styles["card"]}>Adobe</div>
            <div className={styles["card"]}>Discord</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
