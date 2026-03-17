import { createContext, Dispatch } from "react";
import * as THREE from "three";
import { AnimateReducerActions } from "@/providers/renderer/rendererProvider.tsx";

type RendererContextMembers = {
  scene: THREE.Scene;
  camera: THREE.PerspectiveCamera;
  sceneRenderer: THREE.WebGLRenderer;

  animations: Dispatch<AnimateReducerActions>;
};

export const RendererContext = createContext<RendererContextMembers | null>(
  null,
);
