/* eslint-disable react/no-unknown-property */
/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.3 public/models/chair.gltf 
*/

import { useGLTF, useTexture } from "@react-three/drei";
import * as THREE from "three";

function Chair(props) {
  const ltProps = useTexture({
    map: "./textures/leather/Leather_Padded_001_basecolor.jpg",
    displacementMap: "./textures/leather/Leather_Padded_001_height.png",
    normalMap: "./textures/leather/Leather_Padded_001_normal.jpg",
    roughnessMap: "./textures/leather/Leather_Padded_001_roughness.jpg",
    aoMap: "./textures/leather/Leather_Padded_001_ambientOcclusion.jpg",
  });

  ltProps.normalMap.repeat.set(3, 3);
  ltProps.roughnessMap.repeat.set(3, 3);
  ltProps.aoMap.repeat.set(3, 3);
  ltProps.normalMap.wrapS = ltProps.normalMap.wrapT =
    THREE.MirroredRepeatWrapping;
  ltProps.roughnessMap.wrapS = ltProps.roughnessMap.wrapT =
    THREE.MirroredRepeatWrapping;
  ltProps.aoMap.wrapS = ltProps.aoMap.wrapT = THREE.RepeatWrapping;

  const ftProps = useTexture({
    map: "./textures/fabric/Sci-Fi_Padded_Fabric_004_basecolor.jpg",
    displacementMap: "./textures/fabric/Sci-Fi_Padded_Fabric_004_height.png",
    normalMap: "./textures/fabric/Sci-Fi_Padded_Fabric_004_normal.jpg",
    roughnessMap: "./textures/fabric/Sci-Fi_Padded_Fabric_004_roughness.jpg",
    aoMap: "./textures/fabric/Sci-Fi_Padded_Fabric_004_ambientOcclusion.jpg",
  });

  ftProps.normalMap.repeat.set(3, 3);
  ftProps.roughnessMap.repeat.set(3, 3);
  ftProps.aoMap.repeat.set(3, 3);
  ftProps.normalMap.wrapS = ftProps.normalMap.wrapT =
    THREE.MirroredRepeatWrapping;
  ftProps.roughnessMap.wrapS = ftProps.roughnessMap.wrapT =
    THREE.MirroredRepeatWrapping;
  ftProps.aoMap.wrapS = ftProps.aoMap.wrapT = THREE.RepeatWrapping;

  const { nodes, materials } = useGLTF("./models/chair.gltf");
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Chair.geometry}>
        <meshStandardMaterial {...ltProps} displacementScale={0} />
      </mesh>
      <mesh geometry={nodes.Cushion.geometry} position={[0, 0.064, 0.045]}>
        <meshStandardMaterial {...ftProps} displacementScale={0} />
      </mesh>
      <mesh geometry={nodes.Legs1.geometry} material={materials.Legs} />
      <mesh
        geometry={nodes.Legs2.geometry}
        material={materials.Legs}
        visible={false}
      />
    </group>
  );
}

useGLTF.preload("./models/chair.gltf");

export default Chair;
