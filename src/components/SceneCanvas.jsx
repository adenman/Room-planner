import { Canvas } from '@react-three/fiber';
import { PointerLockControls, OrbitControls, Box } from '@react-three/drei';
import React, { useState, useEffect, useRef } from 'react';

// You would create these as separate components
import { Couch } from './models/Couch';
import { Stairs } from './models/Stairs';

export default function SceneCanvas() {
  const [furniture, setFurniture] = useState([]); // Array of furniture objects

  // Logic to add/move furniture would go here
  const addFurniture = (type) => {
    const newFurniture = {
      id: Date.now(), // Unique ID
      type: type,
      position: [0, 0, 0],
      rotation: [0, 0, 0],
      scale: [1, 1, 1],
    };
    setFurniture(prev => [...prev, newFurniture]);
  };

  return (
    <Canvas shadows camera={{ position: [0, 5, 15], fov: 75 }}>
      <ambientLight intensity={0.7} />
      <directionalLight
        castShadow
        position={[15, 25, 10]}
        intensity={0.9}
        shadow-mapSize-width={4096}
        shadow-mapSize-height={4096}
      />
      
      {/* Floor */}
      <mesh receiveShadow rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[50, 50]} />
        <meshStandardMaterial color="#80604D" />
      </mesh>

      {/* Render all furniture from state */}
      {furniture.map(item => {
        if (item.type === 'couch') return <Couch key={item.id} {...item} />;
        if (item.type === 'stairs') return <Stairs key={item.id} {...item} />;
        // Add other furniture types
        return null;
      })}

      <PointerLockControls />
    </Canvas>
  );
}