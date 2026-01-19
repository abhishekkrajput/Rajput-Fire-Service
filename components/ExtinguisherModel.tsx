
import React, { useRef, useState, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import { Vector3, Group } from 'three';
import { Sparkles, Float, MeshDistortMaterial, Shadow } from '@react-three/drei';

interface ExtinguisherProps {
  isSpraying: boolean;
  isExtinguished: boolean;
  onClick: () => void;
}

const ExtinguisherModel: React.FC<ExtinguisherProps> = ({ isSpraying, isExtinguished, onClick }) => {
  const meshRef = useRef<Group>(null);
  const fireRef = useRef<Group>(null);
  const [hovered, setHovered] = useState(false);
  
  // Smoke dissipation state (0 to 1)
  const [smokeIntensity, setSmokeIntensity] = useState(0);

  // Trigger smoke when fire is extinguished
  useEffect(() => {
    if (isExtinguished && !isSpraying) {
      setSmokeIntensity(1);
    } else if (!isExtinguished) {
      setSmokeIntensity(0);
    }
  }, [isExtinguished, isSpraying]);

  // Smooth interaction transitions and smoke dissipation
  useFrame((state, delta) => {
    if (meshRef.current) {
      const targetScale = hovered && !isSpraying ? 1.04 : 1;
      meshRef.current.scale.lerp(new Vector3(targetScale, targetScale, targetScale), 0.1);
    }
    
    // Animate fire group with flickering logic
    if (fireRef.current) {
      fireRef.current.position.y = -2 + Math.sin(state.clock.elapsedTime * 15) * 0.05;
      fireRef.current.scale.x = 1 + Math.sin(state.clock.elapsedTime * 20) * 0.05;
    }

    // Dissipate smoke slowly over 8 seconds
    if (smokeIntensity > 0 && isExtinguished) {
      setSmokeIntensity(prev => Math.max(0, prev - delta * 0.125));
    }
  });

  return (
    <group>
      {/* 3D EXTINGUISHER ASSEMBLY */}
      <Float speed={hovered ? 6 : 2} rotationIntensity={0.15} floatIntensity={0.2}>
        <group 
          ref={meshRef}
          onPointerOver={() => setHovered(true)} 
          onPointerOut={() => setHovered(false)}
          onClick={onClick}
          cursor="pointer"
        >
          {/* Industrial Red Cylinder Body */}
          <mesh castShadow receiveShadow position={[0, 0, 0]}>
            <cylinderGeometry args={[1, 1, 4.2, 64]} />
            <meshStandardMaterial 
              color="#be0000" 
              roughness={0.12} 
              metalness={1} 
              emissive="#330000" 
              emissiveIntensity={0.2}
            />
          </mesh>
          
          {/* Seamless Top Dome */}
          <mesh castShadow position={[0, 2.1, 0]}>
            <sphereGeometry args={[1, 64, 32, 0, Math.PI * 2, 0, Math.PI / 2]} />
            <meshStandardMaterial color="#be0000" roughness={0.12} metalness={1} />
          </mesh>

          {/* Heavy Duty Base Reinforcement */}
          <mesh castShadow position={[0, -2.1, 0]}>
            <cylinderGeometry args={[1.02, 1, 0.5, 48]} />
            <meshStandardMaterial color="#0a0a0a" roughness={0.3} metalness={0.8} />
          </mesh>

          {/* Valve & Lever Control Head */}
          <group position={[0, 2.4, 0]}>
            <mesh castShadow>
              <cylinderGeometry args={[0.32, 0.38, 0.6, 32]} />
              <meshStandardMaterial color="#1a1a1a" metalness={0.9} roughness={0.2} />
            </mesh>
            <mesh castShadow position={[0.7, 0.5, 0]} rotation={[0, 0, isSpraying ? 0.05 : 0.25]}>
              <boxGeometry args={[1.5, 0.08, 0.25]} />
              <meshStandardMaterial color="#1a1a1a" metalness={1} />
            </mesh>
            <mesh castShadow position={[0.6, 0.2, 0]} rotation={[0, 0, -0.15]}>
              <boxGeometry args={[1.3, 0.08, 0.25]} />
              <meshStandardMaterial color="#1a1a1a" metalness={1} />
            </mesh>

            {/* Precision Pressure Gauge */}
            <group position={[0.25, 0.1, 0.55]} rotation={[Math.PI / 2.2, 0, 0]}>
              <mesh castShadow>
                <cylinderGeometry args={[0.22, 0.22, 0.12, 32]} />
                <meshStandardMaterial color="#2a2a2a" metalness={0.9} />
              </mesh>
              <mesh position={[0, 0.07, 0]}>
                <cylinderGeometry args={[0.18, 0.18, 0.01, 32]} />
                <meshStandardMaterial color="#ffffff" />
              </mesh>
              <mesh position={[0, 0.08, 0]} rotation={[0, isExtinguished ? 1 : -0.8, 0]}>
                <boxGeometry args={[0.02, 0.01, 0.14]} />
                <meshStandardMaterial color={isExtinguished ? "#ff0000" : "#00ff00"} emissive={isExtinguished ? "#ff0000" : "#00ff00"} emissiveIntensity={0.5} />
              </mesh>
            </group>
          </group>

          {/* Reinforced Discharge Hose & Nozzle */}
          <group position={[0, 2.3, 0.3]}>
            <mesh position={[0.7, -1.6, 1.3]} rotation={[Math.PI / 1.7, 0, -0.2]}>
              <cylinderGeometry args={[0.12, 0.12, 3.8, 16]} />
              <meshStandardMaterial color="#0a0a0a" roughness={0.9} />
            </mesh>
            <mesh position={[0.9, -3, 3]} rotation={[Math.PI / 2.3, 0, -0.2]}>
              <cylinderGeometry args={[0.3, 0.18, 1.4, 32]} />
              <meshStandardMaterial color="#0a0a0a" roughness={0.4} metalness={0.6} />
            </mesh>
          </group>

          {/* Compliance & Identity Label */}
          <mesh position={[0, -0.2, 1.01]} rotation={[0, 0, 0]}>
            <planeGeometry args={[1.4, 2]} />
            <meshStandardMaterial color="#f0f0f0" roughness={0.7} />
            <mesh position={[0, 0.75, 0.01]}>
              <planeGeometry args={[1.2, 0.2]} />
              <meshStandardMaterial color="#be0000" />
            </mesh>
            <mesh position={[0, 0.35, 0.01]}>
              <planeGeometry args={[1, 0.04]} />
              <meshStandardMaterial color="#111827" />
            </mesh>
            <mesh position={[0, -0.3, 0.01]}>
              <planeGeometry args={[1.1, 0.8]} />
              <meshStandardMaterial color="#0a0a0a" />
            </mesh>
          </mesh>
        </group>
      </Float>

      {/* REACTIVE FIRE HAZARD SYSTEM */}
      {!isExtinguished && (
        <group position={[0, -2, 5]} ref={fireRef}>
          <mesh position={[0, 1, 0]}>
            <sphereGeometry args={[0.7, 32, 32]} />
            <MeshDistortMaterial 
              color="#ffcc00" 
              speed={8} 
              distort={0.5} 
              transparent 
              opacity={0.9}
              emissive="#ff9900"
              emissiveIntensity={3}
            />
          </mesh>
          <mesh position={[0, 1.8, 0]}>
            <cylinderGeometry args={[0.05, 1.4, 3.5, 16]} />
            <MeshDistortMaterial 
              color="#ff3300" 
              speed={12} 
              distort={0.8} 
              transparent 
              opacity={0.5}
              emissive="#ff0000"
              emissiveIntensity={1.5}
            />
          </mesh>
          <pointLight color="#ff5500" intensity={3} distance={10} position={[0, 1.5, 0]} />
          
          <Sparkles 
            count={60} 
            scale={2.5} 
            size={5} 
            speed={3} 
            color="#ffaa00" 
            noise={1}
          />
        </group>
      )}

      {/* POWDER SUPPRESSION SPRAY (ABC AGENT) */}
      {isSpraying && (
        <group position={[1.2, -3.2, 3.8]} rotation={[-Math.PI / 3.8, 0, 0]}>
          <Sparkles 
            count={600} 
            scale={4} 
            size={12} 
            speed={8} 
            color="#f8fafc" 
            noise={3}
          />
          <mesh position={[0, 1.5, 0]}>
            <coneGeometry args={[1.8, 4, 16]} />
            <meshStandardMaterial 
              color="#ffffff" 
              transparent 
              opacity={0.25} 
              emissive="#ffffff" 
              emissiveIntensity={0.8} 
            />
          </mesh>
        </group>
      )}

      {/* DISSIPATING SMOKE EFFECT */}
      {smokeIntensity > 0 && (
        <group position={[0, -1, 5]}>
          <Sparkles 
            count={Math.floor(200 * smokeIntensity)} 
            scale={6} 
            size={4 * smokeIntensity} 
            speed={0.5} 
            color="#cbd5e1" 
            noise={2}
          />
        </group>
      )}

      <Shadow
        opacity={0.4}
        scale={[4, 4, 1]}
        position={[0, -2.5, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
    </group>
  );
};

export default ExtinguisherModel;
