// Template.tsx
import type { ReactNode } from "react";
import { Container } from "../Container/Container";

type TemplateProps = {
  children: ReactNode;
};

export function Template({ children }: TemplateProps) {
  return (
    <Container>
      <div className="template-container">{children}</div>
    </Container>
  );
}
