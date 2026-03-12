import * as THREE from "three";

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000,
);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// const textureLoader = new THREE.TextureLoader();
// function loadColorTexture(path: string) {
//   const texture = textureLoader.load(path);
//   texture.colorSpace = THREE.SRGBColorSpace;
//   return texture;
// }
// const materials = [
// new THREE.MeshBasicMaterial({
//   map: loadColorTexture("assets/img/flower/flower-1.jpg"),
// }),
// new THREE.MeshBasicMaterial({
//   map: loadColorTexture("assets/img/flower/flower-2.jpg"),
// }),
// new THREE.MeshBasicMaterial({
//   map: loadColorTexture("assets/img/flower/flower-3.jpg"),
// }),
// new THREE.MeshBasicMaterial({
//   map: loadColorTexture("assets/img/flower/flower-4.jpg"),
// }),
// new THREE.MeshBasicMaterial({
//   map: loadColorTexture("assets/img/flower/flower-5.jpg"),
// }),
// new THREE.MeshBasicMaterial({
//   map: loadColorTexture("assets/img/flower/flower-6.jpg"),
// }),
//];

const materials = [
  new THREE.MeshBasicMaterial({ color: 0xff0000 }),
  new THREE.MeshBasicMaterial({ color: 0x00ff00 }),
  new THREE.MeshBasicMaterial({ color: 0x0000ff }),
  new THREE.MeshBasicMaterial({ color: 0xffff00 }),
  new THREE.MeshBasicMaterial({ color: 0x00ffff }),
  new THREE.MeshBasicMaterial({ color: 0xff00ff }),
];

const geometry = new THREE.BoxGeometry(1, 1, 1);
const cube = new THREE.Mesh(geometry, materials);
scene.add(cube);

camera.position.z = 5;

function animate(time: number) {
  cube.rotation.x = time / 2000;
  cube.rotation.y = time / 1000;
  renderer.render(scene, camera);
}
renderer.setAnimationLoop(animate);

window.addEventListener("resize", onWindowResize, false);

function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();

  renderer.setSize(window.innerWidth, window.innerHeight);
}
