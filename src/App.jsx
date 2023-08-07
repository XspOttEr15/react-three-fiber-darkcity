import { useState } from 'react'
import './App.css'
import { Canvas } from '@react-three/fiber'
import Experience from './components/Experience'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="app-container">
      <Canvas shadows dpr={[1,2]} camera={{ position: [6,5,6], fov: 30, near:0.1, far:1000, }}>
        <fog attach="fog" args={['#cc7b32', 1, 50]} />
      <Experience/> 
      </Canvas>
    </div>
    </>
  )
}

export default App
