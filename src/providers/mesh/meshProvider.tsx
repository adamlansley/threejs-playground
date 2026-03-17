import { PropsWithChildren, useMemo } from "react";
import * as THREE from "three";
import { MeshContext } from "@/providers/mesh/meshContext.ts";

type MeshProviderProps = { mesh: THREE.Mesh } & PropsWithChildren;

export function MeshProvider({ children, mesh }: MeshProviderProps) {
  const value = useMemo(
    () => ({
      mesh,
    }),
    [mesh],
  );

  return <MeshContext.Provider value={value}>{children}</MeshContext.Provider>;
}
