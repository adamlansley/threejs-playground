import { PropsWithChildren } from "react";
import { RendererProvider } from "@/providers/renderer/renderer.tsx";

type RendererProps = PropsWithChildren;

export const Renderer = ({ children }: RendererProps) => {
  return <RendererProvider>{children}</RendererProvider>;
};
