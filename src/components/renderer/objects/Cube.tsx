import {
  CubeDefinition,
  CubeDefinitionOptions,
} from "@/threejs/objects/cube/cubeDefinition.ts";
import { useEffect, useMemo, useRef } from "react";
import { useRenderer } from "@/providers/renderer/useRenderer.ts";
import * as THREE from "three";
import { COLOUR_MATERIALS } from "@/threejs/materials/colours.ts";

type CubeProps = CubeDefinitionOptions;

export const Cube = ({ geometry, material }: CubeProps) => {
  const cubeDefinition = useRef(new CubeDefinition({ geometry, material }));

  const { scene } = useRenderer();

  useEffect(() => {
    const scopedCubeDefinition = cubeDefinition.current;
    scene.add(scopedCubeDefinition);

    return () => {
      scene.remove(scopedCubeDefinition);
    };
  }, [scene]);

  return <div />;
};

export const DebugCube = () => {
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

  return <Cube geometry={geometry} material={material} />;
};
