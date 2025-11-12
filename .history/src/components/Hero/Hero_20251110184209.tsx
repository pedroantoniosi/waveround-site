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
      <div className="hero-content">
        <div className="hero-caption">
          <h1 className={styles["title"]}>{title}</h1>
          <p className="text-center">
            Domine cada partida com som de alta precisão. Nossos headsets
            entregam potência, clareza e resposta imediata — para quem exige o
            máximo em cada movimento.
          </p>
          {children}
        </div>

        <div className="hero-slider">
          <div className="row gap-1">
            <div className="card">Spotify</div>
            <div className="card">Deezer</div>
            <div className="card">ASUS</div>
            <div className="card">SoundCloud</div>
            <div className="card">YouTube Music</div>
            <div className="card">Shazam</div>
            <div className="card">Adobe</div>
            <div className="card">Discord</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
