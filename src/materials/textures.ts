import * as THREE from "three";

const textureLoader = new THREE.TextureLoader();

export function loadColorTexture(path: string) {
  const texture = textureLoader.load(path);
  texture.colorSpace = THREE.SRGBColorSpace;
  return texture;
}

export const FLOWERS = {
  pinkCherryBlossom: new THREE.MeshBasicMaterial({
    map: loadColorTexture("assets/img/flower/flower-1.jpg"),
  }),
  pinkCosmos: new THREE.MeshBasicMaterial({
    map: loadColorTexture("assets/img/flower/flower-2.jpg"),
  }),
  yellowRedGaillardia: new THREE.MeshBasicMaterial({
    map: loadColorTexture("assets/img/flower/flower-3.jpg"),
  }),
  yellowRedGazania: new THREE.MeshBasicMaterial({
    map: loadColorTexture("assets/img/flower/flower-4.jpg"),
  }),
  purpleCorydalis: new THREE.MeshBasicMaterial({
    map: loadColorTexture("assets/img/flower/flower-5.jpg"),
  }),
  yellowAeonium: new THREE.MeshBasicMaterial({
    map: loadColorTexture("assets/img/flower/flower-6.jpg"),
  }),
};
