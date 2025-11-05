// Template.tsx
import type { ReactNode } from "react";

type TemplateProps = {
  children: ReactNode;
};

export function Template({ children }: TemplateProps) {
  return (
    <Template>
      <div className="template-container">{children}</div>
    </Template>
  );
}
