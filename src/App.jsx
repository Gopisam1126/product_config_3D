/* eslint-disable react/no-unknown-property */
import { Canvas } from "@react-three/fiber";
import "./App.css";
import Experience from "./assets/components/experience";
import Configurator from "./assets/components/configurator";
import { CustProvider } from "./assets/context/customization";

function App() {
  return (
    <>
      <CustProvider>
        <Canvas
          style={{
            background: "#101010",
          }}
        >
          <ambientLight intensity={0.2} />
          <directionalLight intensity={3} position={[1, 2, 4]} />
          <fog attach="fog" args={["#101010", 5, 20]} />
          <Experience />
        </Canvas>
        <Configurator />
      </CustProvider>
    </>
  );
}

export default App;
