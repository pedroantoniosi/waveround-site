import React from "react";

type TemplateProps = {
  children?: React.ReactNode;
};

const Hero = ({ children }: TemplateProps) => {
  return (
    <section className="" role="banner" aria-label="Hero">
      <div className="hero-content">{children}</div>
    </section>
  );
};

export default Hero;
