import "./App.css";
import { Renderer } from "@/components/renderer/Renderer.tsx";
import { DebugCube } from "@/components/renderer/objects/Cube.tsx";
import { Rotate } from "@/components/renderer/animations/Rotate.tsx";
import { useState } from "react";

function App() {
  const [pitch, setPitch] = useState<number>(0);
  const [yaw, setYaw] = useState<number>(0);
  const [roll, setRoll] = useState<number>(0);

  return (
    <div className="flex flex-1 max-w-full">
      <div className="bg-gray-700 z-0 fixed top-2 left-2 text-white flex flex-col gap-2 p-2 rounded-md">
        <label className="flex flex-row gap-4">
          Pitch
          <input
            type="number"
            step={0.001}
            value={pitch}
            onChange={(event) => setPitch(event.target.valueAsNumber || 0)}
          />
        </label>
        <label className="flex flex-row gap-4">
          Yaw
          <input
            type="number"
            step={0.001}
            value={yaw}
            onChange={(event) => setYaw(event.target.valueAsNumber || 0)}
          />
        </label>
        <label className="flex flex-row gap-4">
          Roll
          <input
            type="number"
            step={0.001}
            value={roll}
            onChange={(event) => setRoll(event.target.valueAsNumber || 0)}
          />
        </label>
      </div>
      <Renderer>
        <DebugCube>
          <Rotate pitch={pitch} yaw={yaw} roll={roll} />
        </DebugCube>
      </Renderer>
    </div>
  );
}

export default App;
