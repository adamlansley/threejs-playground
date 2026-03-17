import { useMesh } from "@/providers/mesh/useMesh.ts";
import { useCallback, useEffect } from "react";
import { useRenderer } from "@/providers/renderer/useRenderer.ts";

type RotateProps = {
  x?: number;
  y?: number;
  z?: number;
};

export const Rotate = ({ x, y, z }: RotateProps) => {
  const { mesh } = useMesh();
  const { animations } = useRenderer();

  const onAnimate: XRFrameRequestCallback = useCallback(() => {
    if (x) {
      mesh.rotateY(-x);
    }

    if (y) {
      mesh.rotateX(y);
    }

    if (z) {
      mesh.rotateZ(z);
    }
  }, [mesh, x, y, z]);

  useEffect(() => {
    animations({ type: "add", callback: onAnimate });

    return () => {
      animations({ type: "remove", callback: onAnimate });
    };
  }, [animations, onAnimate]);

  return null;
};
