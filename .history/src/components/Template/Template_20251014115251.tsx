// Template.tsx
import type { ReactNode } from "react";

type TemplateProps = {
  children: ReactNode;
};

export function Template({ children }: TemplateProps) {
  return <div className="template-container">{children}</div>;
}
