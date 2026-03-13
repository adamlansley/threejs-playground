import * as THREE from "three";

export type COLOUR_NAMES =
  | "RED"
  | "GREEN"
  | "BLUE"
  | "YELLOW"
  | "CYAN"
  | "MAGENTA";

export const COLOURS: {
  [K in COLOUR_NAMES]: { colour: number; name: string };
} = {
  RED: {
    colour: 0xff0000,
    name: "RED",
  },
  GREEN: {
    colour: 0x00ff00,
    name: "GREEN",
  },
  BLUE: {
    colour: 0x0000ff,
    name: "BLUE",
  },
  YELLOW: {
    colour: 0xffff00,
    name: "YELLOW",
  },
  CYAN: {
    colour: 0x00ffff,
    name: "CYAN",
  },
  MAGENTA: {
    colour: 0xff00ff,
    name: "MAGENTA",
  },
};

export const COLOUR_MATERIALS: {
  [K in COLOUR_NAMES]: THREE.MeshBasicMaterial;
} = {
  RED: new THREE.MeshBasicMaterial({ color: COLOURS.RED.colour }),
  GREEN: new THREE.MeshBasicMaterial({ color: COLOURS.GREEN.colour }),
  BLUE: new THREE.MeshBasicMaterial({ color: COLOURS.BLUE.colour }),
  YELLOW: new THREE.MeshBasicMaterial({ color: COLOURS.YELLOW.colour }),
  CYAN: new THREE.MeshBasicMaterial({ color: COLOURS.CYAN.colour }),
  MAGENTA: new THREE.MeshBasicMaterial({ color: COLOURS.MAGENTA.colour }),
};
