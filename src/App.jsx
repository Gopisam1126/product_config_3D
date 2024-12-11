/* eslint-disable react/no-unknown-property */
import { Canvas } from '@react-three/fiber'
import './App.css'
import Experience from './assets/components/experience'

function App() {
  return (
    <>
      <Canvas style={{
        background: "#000"
      }}>
        <ambientLight intensity={0.2}/>
        <directionalLight intensity={3} position={[1, 2, 4]}/>
        <Experience/>
      </Canvas>
    </>
  )
}

export default App
