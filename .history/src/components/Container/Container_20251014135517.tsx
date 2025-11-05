import type { ReactNode } from "react";

type TemplateProps = {
  children: ReactNode;
};

export function Container({ children }: TemplateProps) {
  return <div className="container">{children}</div>;
}
