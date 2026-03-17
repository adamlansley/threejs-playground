import { useMesh } from "@/providers/mesh/useMesh.ts";
import { useCallback, useEffect } from "react";
import { useRenderer } from "@/providers/renderer/useRenderer.ts";

type RotateProps = {
  pitch?: number;
  yaw?: number;
  roll?: number;
};

export const Rotate = ({ pitch, yaw, roll }: RotateProps) => {
  const { mesh } = useMesh();
  const { animations } = useRenderer();

  const onAnimate: XRFrameRequestCallback = useCallback(() => {
    if (pitch) {
      mesh.rotateX(pitch);
    }

    if (yaw) {
      mesh.rotateY(-yaw);
    }

    if (roll) {
      mesh.rotateZ(-roll);
    }
  }, [mesh, pitch, roll, yaw]);

  useEffect(() => {
    animations({ type: "add", callback: onAnimate });

    return () => {
      animations({ type: "remove", callback: onAnimate });
    };
  }, [animations, onAnimate]);

  return null;
};
