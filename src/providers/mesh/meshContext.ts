import { createContext } from "react";
import * as THREE from "three";

type MeshContextMembers = {
  mesh: THREE.Mesh;
};

export const MeshContext = createContext<MeshContextMembers | null>(null);
