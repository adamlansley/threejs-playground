import "./App.css";
import { Renderer } from "@/components/renderer/Renderer.tsx";
import { DebugCube } from "@/components/renderer/objects/Cube.tsx";
import { Rotate } from "@/components/renderer/animations/Rotate.tsx";
import { useState } from "react";

function App() {
  const [rotateX, setRotateX] = useState<number>(0.01);
  const [rotateY, setRoateY] = useState<number>(0.001);
  const [rotateZ, setRotateZ] = useState<number>(0.01);

  return (
    <div className="flex flex-1 max-w-full">
      <div className="bg-gray-700 z-0 fixed top-2 left-2">
        <input
          type="number"
          step={0.001}
          value={rotateX}
          onChange={(event) => setRotateX(event.target.valueAsNumber || 0)}
        />
        <input
          type="number"
          step={0.001}
          value={rotateY}
          onChange={(event) => setRoateY(event.target.valueAsNumber || 0)}
        />
        <input
          type="number"
          step={0.001}
          value={rotateZ}
          onChange={(event) => setRotateZ(event.target.valueAsNumber || 0)}
        />
      </div>
      <Renderer>
        <DebugCube>
          <Rotate x={rotateX} y={rotateY} z={rotateZ} />
        </DebugCube>
      </Renderer>
    </div>
  );
}

export default App;
