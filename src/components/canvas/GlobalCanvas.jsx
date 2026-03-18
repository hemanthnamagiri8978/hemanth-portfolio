import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';

function NordicBlob() {
  const mesh = useRef();
  const mesh2 = useRef();

  useFrame(({ clock }) => {
    const t = clock.elapsedTime;
    if (mesh.current) {
      mesh.current.position.x = Math.sin(t * 0.25) * 2;
      mesh.current.position.y = Math.cos(t * 0.15) * 1.5;
      mesh.current.rotation.x = t * 0.08;
    }
    if (mesh2.current) {
      mesh2.current.position.x = Math.cos(t * 0.2) * 3;
      mesh2.current.position.y = Math.sin(t * 0.3) * 2;
      mesh2.current.rotation.y = t * 0.12;
    }
  });

  return (
    <>
      <ambientLight intensity={0.2} color="#000b1a" />
      <pointLight position={[5, 5, 5]}   intensity={40} color="#64dfdf" distance={25} />
      <pointLight position={[-5, -3, 3]}  intensity={30} color="#4a69bd" distance={20} />
      <pointLight position={[0, 8, -5]}   intensity={20} color="#334d6e" distance={25} />

      <mesh ref={mesh} scale={3.8}>
        <icosahedronGeometry args={[1, 4]} />
        <meshStandardMaterial color="#020814" metalness={1} roughness={0.1} transparent opacity={0.65} />
      </mesh>

      <mesh ref={mesh2} scale={2.2} position={[-4, -1, -3]}>
        <icosahedronGeometry args={[1, 3]} />
        <meshStandardMaterial color="#051020" metalness={1} roughness={0.05} transparent opacity={0.45} />
      </mesh>
    </>
  );
}

const GlobalCanvas = () => (
  <div style={{
    position: 'fixed', inset: 0, zIndex: 1, pointerEvents: 'none',
    background: 'radial-gradient(ellipse 80% 60% at 50% -10%, rgba(100,223,223,0.08) 0%, transparent 60%), radial-gradient(ellipse 60% 40% at 80% 80%, rgba(74,105,189,0.06) 0%, transparent 60%), #050505'
  }}>
    <Canvas camera={{ position: [0, 0, 8], fov: 50 }} dpr={[1, 1.5]}>
      <NordicBlob />
    </Canvas>
  </div>
);

export default GlobalCanvas;
