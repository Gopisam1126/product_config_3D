/* eslint-disable react/no-unknown-property */
import {
  Float,
  MeshReflectorMaterial,
  PresentationControls,
  Stage,
} from "@react-three/drei";
import Chair from "./Chair";

const Experience = () => {
  return (
    <PresentationControls
      speed={1.5}
      global
      zoom={0.7}
      polar={[-0.1, Math.PI / 4]}
    >
      <Stage
        adjustCamera={false}
        environment="city"
        intensity={0.6}
        shadows={false}
      >
        <Float
          speed={4}
          rotationIntensity={false}
          floatIntensity={1}
          floatingRange={[0, 0.3]}
        >
          <Chair />
        </Float>
      </Stage>
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -2, 0]}>
        <planeGeometry args={[170, 170]} />
        <MeshReflectorMaterial
          blur={[300, 100]}
          resolution={2048}
          mixBlur={1}
          mixStrength={50}
          roughness={1}
          depthScale={1.2}
          minDepthThreshold={0.1}
          maxDepthThreshold={1.1}
          color="#101010"
          metalness={0.8}
        />
      </mesh>
    </PresentationControls>
  );
};

export default Experience;
