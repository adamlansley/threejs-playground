import {
  PropsWithChildren,
  Reducer,
  useCallback,
  useEffect,
  useMemo,
  useReducer,
  useRef,
} from "react";

import * as THREE from "three";
import { RendererContext } from "@/providers/renderer/rendererContext.ts";

export type AnimateReducerActions =
  | {
      type: "add";
      callback: XRFrameRequestCallback;
    }
  | {
      type: "remove";
      callback: XRFrameRequestCallback;
    };

const animationReducer: Reducer<
  XRFrameRequestCallback[],
  AnimateReducerActions
> = (state, action) => {
  if (action.type === "add") {
    return [...state, action.callback];
  }

  if (action.type === "remove") {
    return [...state.filter((callback) => callback !== action.callback)];
  }

  throw new Error(`Unknown animation reducer action ${action}`);
};

type RendererProviderProps = PropsWithChildren;

export function RendererProvider({ children }: RendererProviderProps) {
  const threejsContainer = useRef<HTMLDivElement | null>(null);

  const scene = useMemo(() => new THREE.Scene(), []);
  const sceneRenderer = useMemo(() => new THREE.WebGLRenderer(), []);
  const camera = useMemo(
    () =>
      new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        1000,
      ),
    [],
  );

  const [animateCallbacks, animations] = useReducer(animationReducer, []);

  const value = useMemo(
    () => ({
      scene,
      camera,
      sceneRenderer,
      animations,
    }),
    [scene, camera, sceneRenderer],
  );

  const onAnimate = useCallback(
    (time: DOMHighResTimeStamp, frame: XRFrame) => {
      animateCallbacks.forEach((callback) => callback(time, frame));
      sceneRenderer.render(scene, camera);
    },
    [animateCallbacks, sceneRenderer, scene, camera],
  );

  useEffect(() => {
    if (!threejsContainer.current) {
      return;
    }

    // Keep a reference to the current container in scope for cleanup
    const container = threejsContainer.current;

    // eslint-disable-next-line react-hooks/immutability
    camera.position.z = 5;
    sceneRenderer.setSize(container.clientWidth, container.clientHeight);
    container.appendChild(sceneRenderer.domElement);

    sceneRenderer.setAnimationLoop(onAnimate);

    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const { width, height } = entry.contentRect;
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
        sceneRenderer.setSize(width, height);
        sceneRenderer.render(scene, camera);
      }
    });
    resizeObserver.observe(container);

    return () => {
      container.removeChild(sceneRenderer.domElement);
      resizeObserver.disconnect();
    };
  }, [onAnimate, threejsContainer, sceneRenderer, camera, scene]);

  return (
    <RendererContext.Provider value={value}>
      <div className="flex flex-1 max-w-full" ref={threejsContainer}>
        {children}
      </div>
      {children}
    </RendererContext.Provider>
  );
}
