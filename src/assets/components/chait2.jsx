/* eslint-disable react/no-unknown-property */
/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.3 public/models/scene.gltf 
Author: BATRIC_18 (https://sketchfab.com/BATRIC_18)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/victorian-chair-6479a1900b614b59b26784c3a7922eb3
Title: Victorian chair
*/

import { useGLTF } from '@react-three/drei'

function ChairTwo(props) {
  const { nodes, materials } = useGLTF('./models/scene.gltf')
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <mesh geometry={nodes.victorian_chair_wood_wood_0.geometry} material={materials.wood} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
          <mesh geometry={nodes.victorian_chair_cloth_cloth_0.geometry} material={materials.cloth} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('./models/scene.gltf')

export default ChairTwo;