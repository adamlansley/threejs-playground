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

  // static createDebugCube(
  //   geometry: THREE.BoxGeometry = new THREE.BoxGeometry(1, 1, 1),
  // ) {
  //   return new CubeDefinition({
  //     geometry,
  //     material: [
  //       COLOUR_MATERIALS.RED,
  //       COLOUR_MATERIALS.GREEN,
  //       COLOUR_MATERIALS.BLUE,
  //       COLOUR_MATERIALS.YELLOW,
  //       COLOUR_MATERIALS.CYAN,
  //       COLOUR_MATERIALS.MAGENTA,
  //     ],
  //   });
  // }
  //
  // static createFlowerCube(
  //   geometry: THREE.BoxGeometry = new THREE.BoxGeometry(1, 1, 1),
  // ) {
  //   return new CubeDefinition({
  //     geometry,
  //     material: [
  //       FLOWERS.pinkCherryBlossom,
  //       FLOWERS.pinkCosmos,
  //       FLOWERS.yellowRedGaillardia,
  //       FLOWERS.yellowRedGazania,
  //       FLOWERS.purpleCorydalis,
  //       FLOWERS.yellowAeonium,
  //     ],
  //   });
  // }
}
