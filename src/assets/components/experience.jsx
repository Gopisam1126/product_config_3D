/* eslint-disable react/no-unknown-property */
import {
  Float,
  MeshReflectorMaterial,
  PresentationControls,
  Stage,
} from "@react-three/drei";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const Experience = () => {

    const gltf = useLoader(GLTFLoader, './models/chair.gltf')

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
          speed={3}
          rotationIntensity={false}
          floatIntensity={1}
          floatingRange={[0, 0.5]}
        >
          {/* <mesh>
            <boxGeometry args={[2, 2, 2]} />
            <meshNormalMaterial />
          </mesh> */}
          <primitive object={gltf.scene} />
        </Float>
      </Stage>
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -2, 0]}>
        <planeGeometry args={[170, 170]} />
        <MeshReflectorMaterial
          blur={[300, 100]}
          resolution={1040}
          mixBlur={1}
          mixStrength={40}
          roughness={1}
          depthScale={1.2}
          minDepthThreshold={0.4}
          maxDepthThreshold={1.4}
          color="#101010"
          metalness={0.5}
        />
      </mesh>
    </PresentationControls>
  );
};

export default Experience;
