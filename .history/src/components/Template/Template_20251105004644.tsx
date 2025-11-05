import React from "react";
import styles from "./Index.module.css";

type TemplateProps = {
  children?: React.ReactNode;
};

const Template = ({ children }: TemplateProps) => {
  return (
    <section
      className={styles["template-container"]}
      role="template"
      aria-label="Template"
    >
      <div className={styles[['template-content']"]}>{children}</div>
    </section>
  );
};

export default Template;
