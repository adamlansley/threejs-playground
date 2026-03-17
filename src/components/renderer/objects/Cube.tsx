import {
  CubeDefinition,
  CubeDefinitionOptions,
} from "@/threejs/objects/cube/cubeDefinition.ts";
import { PropsWithChildren, useEffect, useMemo } from "react";
import { useRenderer } from "@/providers/renderer/useRenderer.ts";
import * as THREE from "three";
import { COLOUR_MATERIALS } from "@/threejs/materials/colours.ts";
import { MeshProvider } from "@/providers/mesh/meshProvider.tsx";

type CubeProps = {
  pitch?: number;
  yaw?: number;
  roll?: number;
} & CubeDefinitionOptions &
  PropsWithChildren;

export const Cube = ({ geometry, material, children }: CubeProps) => {
  const cubeDefinition = useMemo(
    () => new CubeDefinition({ geometry, material }),
    [geometry, material],
  );

  const { scene } = useRenderer();

  useEffect(() => {
    scene.add(cubeDefinition);

    return () => {
      scene.remove(cubeDefinition);
    };
  }, [cubeDefinition, scene]);

  return <MeshProvider mesh={cubeDefinition}>{children}</MeshProvider>;
};

type DebugCubeProps = Omit<CubeProps, "geometry" | "material">;

export const DebugCube = (props: DebugCubeProps) => {
  const geometry = useMemo(() => new THREE.BoxGeometry(1, 1, 1), []);
  const material = useMemo(
    () => [
      COLOUR_MATERIALS.RED,
      COLOUR_MATERIALS.GREEN,
      COLOUR_MATERIALS.BLUE,
      COLOUR_MATERIALS.YELLOW,
      COLOUR_MATERIALS.CYAN,
      COLOUR_MATERIALS.MAGENTA,
    ],
    [],
  );

  return <Cube geometry={geometry} material={material} {...props} />;
};
