import "./App.css";
import { Renderer } from "@/components/renderer/Renderer.tsx";
import { DebugCube } from "@/components/renderer/objects/Cube.tsx";

function App() {
  return (
    <Renderer>
      <DebugCube />
    </Renderer>
  );
}

export default App;
