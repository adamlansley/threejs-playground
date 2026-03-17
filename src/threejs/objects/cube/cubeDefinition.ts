import * as THREE from "three";

// Using object structure as it's easier when being used in React
export type CubeDefinitionOptions = {
  geometry: THREE.BoxGeometry;
  material: THREE.Material | THREE.Material[];
};

export class CubeDefinition extends THREE.Mesh {
  constructor({ geometry, material }: CubeDefinitionOptions) {
    super(geometry, material);
  }
}
