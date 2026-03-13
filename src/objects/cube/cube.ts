import * as THREE from "three";
import { COLOUR_MATERIALS } from "../../materials/colours.ts";
import { FLOWERS } from "../../materials/textures.ts";

export class Cube extends THREE.Mesh {
  constructor(
    geometry: THREE.BoxGeometry,
    material: THREE.Material | THREE.Material[],
  ) {
    super(geometry, material);
  }

  static createDebugCube(
    geometry: THREE.BoxGeometry = new THREE.BoxGeometry(1, 1, 1),
  ) {
    return new Cube(geometry, [
      COLOUR_MATERIALS.RED,
      COLOUR_MATERIALS.GREEN,
      COLOUR_MATERIALS.BLUE,
      COLOUR_MATERIALS.YELLOW,
      COLOUR_MATERIALS.CYAN,
      COLOUR_MATERIALS.MAGENTA,
    ]);
  }

  static createFlowerCube(
    geometry: THREE.BoxGeometry = new THREE.BoxGeometry(1, 1, 1),
  ) {
    return new Cube(geometry, [
      FLOWERS.pinkCherryBlossom,
      FLOWERS.pinkCosmos,
      FLOWERS.yellowRedGaillardia,
      FLOWERS.yellowRedGazania,
      FLOWERS.purpleCorydalis,
      FLOWERS.yellowAeonium,
    ]);
  }
}
