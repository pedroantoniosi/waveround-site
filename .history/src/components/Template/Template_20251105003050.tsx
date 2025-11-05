import React from "react";

type TemplateProps = {
  children?: React.ReactNode;
};

const Template = ({ children }: TemplateProps) => {
  return (
    <section
      className="template-container"
      role="template"
      aria-label="Template"
    >
      {children}
    </section>
  );
};

export default Template;
