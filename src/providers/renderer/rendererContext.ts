import { createContext } from "react";
import * as THREE from "three";

type RendererContextMembers = {
  scene: THREE.Scene;
  camera: THREE.PerspectiveCamera;
  sceneRenderer: THREE.WebGLRenderer;
};

export const RendererContext = createContext<RendererContextMembers | null>(
  null,
);
