import { useContext } from "react";
import { MeshContext } from "@/providers/mesh/meshContext.ts";

export const useMesh = () => {
  const context = useContext(MeshContext);

  if (context === null) {
    throw new Error("Used Mesh outside of provider");
  }

  return context;
};
