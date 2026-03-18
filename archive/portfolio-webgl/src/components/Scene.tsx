import { useRef, useEffect, useState } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { Box, RoundedBox, Html, Sphere } from '@react-three/drei';
import * as THREE from 'three';

// A simple wireframe sphere for the "Skills" technical section
function WireframeSphere({ position }: { position: [number, number, number] }) {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.1;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.15;
    }
  });

  return (
    <Sphere ref={meshRef} args={[2, 16, 16]} position={position}>
      <meshBasicMaterial color="#3B4BA0" wireframe transparent opacity={0.3} />
    </Sphere>
  );
}

// Floating tiles for the "Projects" section
function ProjectTiles({ position }: { position: [number, number, number] }) {
  const groupRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime) * 0.2;
    }
  });

  return (
    <group ref={groupRef} position={position}>
      <RoundedBox args={[1.5, 2, 0.1]} position={[-2, 0, 0]} radius={0.05} receiveShadow castShadow>
        <meshStandardMaterial color="#ffffff" />
      </RoundedBox>
      <RoundedBox args={[1.5, 2, 0.1]} position={[0, 0, -1]} radius={0.05} receiveShadow castShadow>
        <meshStandardMaterial color="#f5f5f5" />
      </RoundedBox>
      <RoundedBox args={[1.5, 2, 0.1]} position={[2, 0, 0]} radius={0.05} receiveShadow castShadow>
        <meshStandardMaterial color="#ffffff" />
      </RoundedBox>
    </group>
  );
}

// Global Reusable instances to prevent garbage collection spikes in useFrame
const colorTech = new THREE.Color('#1A2B5E');
const colorLight = new THREE.Color('#FAF9F6');
const tempColor = new THREE.Color();
const targetPos = new THREE.Vector3();
const cameraPos = new THREE.Vector3();

export default function Scene() {
  const { camera } = useThree();
  const deskGroupRef = useRef<THREE.Group>(null);
  const targetGroupRef = useRef<THREE.Group>(null);
  const scrollOffsetRef = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollHeight > 0) {
        scrollOffsetRef.current = window.scrollY / scrollHeight;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // init
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useFrame((state) => {
    const scrollOffset = scrollOffsetRef.current;

    // 1. Gentle floating animation for the hero desk
    if (deskGroupRef.current) {
      const bounce = Math.sin(state.clock.elapsedTime) * 0.05;
      deskGroupRef.current.position.y = bounce;
    }

    // 2. Camera Scroll Logic
    // Determine target based on scroll chunks
    if (scrollOffset < 0.25) {
      targetPos.set(0, 0, 0);
      cameraPos.set(0, 2, 6);
    } else if (scrollOffset >= 0.25 && scrollOffset < 0.58) {
      let t = THREE.MathUtils.clamp((scrollOffset - 0.25) / 0.08, 0, 1);
      targetPos.set(0, THREE.MathUtils.lerp(0, -15, t), 0);
      cameraPos.set(0, THREE.MathUtils.lerp(2, -13, t), 6);
    } else if (scrollOffset >= 0.58 && scrollOffset < 0.83) {
      let t = THREE.MathUtils.clamp((scrollOffset - 0.58) / 0.08, 0, 1);
      targetPos.set(THREE.MathUtils.lerp(0, 15, t), -15, 0);
      cameraPos.set(THREE.MathUtils.lerp(0, 15, t), -13, 6);
    } else {
      let t = THREE.MathUtils.clamp((scrollOffset - 0.83) / 0.07, 0, 1);
      targetPos.set(15, THREE.MathUtils.lerp(-15, -30, t), 0);
      cameraPos.set(15, THREE.MathUtils.lerp(-13, -28, t), 6);
    }

    // Smoothly apply camera positioning
    camera.position.lerp(cameraPos, 0.05);
    
    // Dynamic Scene Background Color (Using setClearColor to prevent re-compilation)
    if (scrollOffset >= 0.25 && scrollOffset < 0.58) {
      let t = THREE.MathUtils.clamp((scrollOffset - 0.25) / 0.08, 0, 1);
      tempColor.lerpColors(colorLight, colorTech, t);
      state.gl.setClearColor(tempColor);
    } else if (scrollOffset >= 0.58 && scrollOffset < 0.83) {
      let t = THREE.MathUtils.clamp((scrollOffset - 0.58) / 0.08, 0, 1);
      tempColor.lerpColors(colorTech, colorLight, t);
      state.gl.setClearColor(tempColor);
    } else {
      state.gl.setClearColor(colorLight);
    }
    
    // Smoothly look at target
    if (targetGroupRef.current) {
        targetGroupRef.current.position.lerp(targetPos, 0.05);
        camera.lookAt(targetGroupRef.current.position);
    }
  });

  return (
    <>
      <group ref={targetGroupRef} />

      {/* ZONE 1: HERO DESK */}
      <group position={[0, 0, 0]} ref={deskGroupRef}>
        <RoundedBox args={[3, 0.1, 1.5]} position={[2, -0.5, -1]} radius={0.05} receiveShadow castShadow>
          <meshStandardMaterial color="#ffffff" />
        </RoundedBox>
        <Box args={[0.1, 1, 0.1]} position={[0.7, -1.05, -1.6]} castShadow>
          <meshStandardMaterial color="#dddddd" />
        </Box>
        <Box args={[0.1, 1, 0.1]} position={[3.3, -1.05, -1.6]} castShadow>
          <meshStandardMaterial color="#dddddd" />
        </Box>
        <Box args={[0.6, 0.05, 0.4]} position={[2, -0.425, -1.3]} castShadow receiveShadow>
          <meshStandardMaterial color="#333333" />
        </Box>
        <Box args={[0.1, 0.3, 0.1]} position={[2, -0.25, -1.4]} castShadow receiveShadow>
          <meshStandardMaterial color="#333333" />
        </Box>
        <RoundedBox args={[1.5, 0.9, 0.1]} position={[2, 0.1, -1.35]} radius={0.05} castShadow receiveShadow>
          <meshStandardMaterial color="#1a1a1a" />
          <Html transform position={[0, 0, 0.06]} scale={0.1} occlude="blending">
            <div style={{
              width: '1400px', height: '800px', backgroundColor: '#1E1E1E',
              color: '#D4D4D4', fontFamily: '"VT323", monospace', padding: '20px',
              borderRadius: '10px', boxSizing: 'border-box', fontSize: '32px',
              overflow: 'hidden', border: '20px solid #111'
            }}>
              <div style={{ color: '#569CD6' }}>function <span style={{ color: '#DCDCAA' }}>initPortfolio</span>() {'{'}</div>
              <div style={{ paddingLeft: '20px' }}>
                <span style={{ color: '#C586C0' }}>return</span> <span style={{ color: '#CE9178' }}>"Welcome to my world"</span>;
              </div>
              <div>{'}'}</div><br />
              <div style={{ color: '#6A9955' }}>// Systems nominal...</div>
            </div>
          </Html>
        </RoundedBox>
        <Box args={[0.6, 0.02, 0.2]} position={[2, -0.44, -0.8]} castShadow receiveShadow>
          <meshStandardMaterial color="#f0f0f0" />
        </Box>
      </group>

      {/* ZONE 2: SKILLS (Technical Wireframe Area) */}
      <group position={[0, -15, 0]}>
        <WireframeSphere position={[3, 0, -2]} />
      </group>

      {/* ZONE 3: PROJECTS */}
      <group position={[15, -15, 0]}>
        <ProjectTiles position={[-3, 0, -3]} />
      </group>

      {/* ZONE 4: CONTACT */}
      <group position={[15, -30, 0]}>
         <RoundedBox args={[2, 2, 2]} position={[0, 0, -2]} radius={0.2} receiveShadow castShadow>
          <meshStandardMaterial color="#F38117" />
        </RoundedBox>
      </group>
    </>
  );
}
