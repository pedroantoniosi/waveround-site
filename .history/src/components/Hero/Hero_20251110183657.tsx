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
        <h1 className={styles["title"]}>{title}</h1>
        {children}
      </div>

      <div className="hero-slider">
        <div className="card">Spotify</div>
        <div className="card">Deezer</div>
        <div className="card">ASUS</div>
        <div className="card">SoundCloud</div>
        <div className="card">YouTube Music</div>
        <div className="card">Shazam</div>
        <div className="card">Adobe</div>
        <div className="card">Discord</div>
      </div>
    </section>
  );
};

export default Hero;
