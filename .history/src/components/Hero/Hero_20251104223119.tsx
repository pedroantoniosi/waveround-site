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
        <h1>{title}</h1>
        {children}
      </div>
    </section>
  );
};

export default Hero;
