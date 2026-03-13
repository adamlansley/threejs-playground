import * as THREE from "three";
import {
  CSS3DRenderer,
  CSS3DObject,
} from "three/addons/renderers/CSS3DRenderer.js";
import { Cube } from "./objects/cube/cube.ts";

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000,
);

const sceneRenderer = new THREE.WebGLRenderer();
sceneRenderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(sceneRenderer.domElement);

const cube = Cube.createDebugCube();
scene.add(cube);

camera.position.z = 5;

const textRenderer = new CSS3DRenderer();
textRenderer.setSize(window.innerWidth, window.innerHeight);
textRenderer.domElement.style.position = "absolute";
textRenderer.domElement.style.top = "0px";
document.body.appendChild(textRenderer.domElement);

const pos = new THREE.Vector3(0.5, 0, 0);
const normal = new THREE.Vector3(1, 0, 0);

const cNormal = new THREE.Vector3();
const cPos = new THREE.Vector3();
const m4 = new THREE.Matrix4();

const div = document.createElement("div");
div.className = "label";
div.textContent = "Red";
const label = new CSS3DObject(div);
label.position.copy(pos);
label.rotation.y = Math.PI * 0.5;
label.scale.set(0.015, 0.015, 1);
cube.add(label);

function animate() {
  cNormal.copy(normal).applyMatrix3(cube.normalMatrix);
  cPos
    .copy(pos)
    .applyMatrix4(
      m4.multiplyMatrices(camera.matrixWorldInverse, cube.matrixWorld),
    );
  const d = cPos.negate().dot(cNormal);

  div.style.visibility = d < 0 ? "hidden" : "visible";

  sceneRenderer.render(scene, camera);
  textRenderer.render(scene, camera);
}
sceneRenderer.setAnimationLoop(animate);

window.addEventListener("resize", onWindowResize, false);

function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();

  sceneRenderer.setSize(window.innerWidth, window.innerHeight);
}
