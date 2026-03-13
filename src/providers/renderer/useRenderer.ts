import { useContext } from "react";
import { RendererContext } from "@/providers/renderer/rendererContext.ts";

export const useRenderer = () => {
  const context = useContext(RendererContext);

  if (context === null) {
    throw new Error("Used Renderer outside of Provider");
  }

  return context;
};
