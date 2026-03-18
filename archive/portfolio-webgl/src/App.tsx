import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment } from '@react-three/drei';
import Scene from './components/Scene';
import Overlay from './components/Overlay';
import './index.css';

function App() {
  return (
    <>
      {/* Fixed WebGL Background */}
      <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', zIndex: -1 }}>
        <Canvas gl={{ alpha: false }} shadows camera={{ position: [0, 2, 6], fov: 45 }}>
          <ambientLight intensity={0.5} />
          <directionalLight
            castShadow
            position={[5, 10, 5]}
            intensity={1.5}
            shadow-mapSize={[1024, 1024]}
          >
            <orthographicCamera attach="shadow-camera" args={[-10, 10, 10, -10]} />
          </directionalLight>

          <Suspense fallback={null}>
            <Scene />
          </Suspense>
        </Canvas>
      </div>

      {/* Native Scrolling DOM Foreground */}
      <div style={{ position: 'relative', width: '100%', zIndex: 10 }}>
        <Overlay />
      </div>
    </>
  );
}

export default App;
