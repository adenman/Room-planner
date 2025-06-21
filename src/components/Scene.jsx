import React, { Suspense, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { Plane } from '@react-three/drei';
import Player from './Player';
import * as Models from './models'; // This path assumes your models directory is a sibling

// A generic component to render the correct furniture model
const Furniture = ({ type, ...props }) => {
    const modelKey = Object.keys(Models).find(key => key.toLowerCase() === type.toLowerCase());
    const Component = Models[modelKey];
    return Component ? <Component {...props} /> : null;
};

export  function Scene({ furniture, isMenuOpen }) {
    const groundFloorRef = useRef();

    return (
        <Canvas shadows camera={{ position: [0, 5, 15], fov: 75 }}>
            <Suspense fallback={null}>
                <ambientLight intensity={0.7} />
                <directionalLight
                    castShadow
                    position={[15, 25, 10]}
                    intensity={0.9}
                    shadow-mapSize-width={4096}
                    shadow-mapSize-height={4096}
                />
                
                <Plane ref={groundFloorRef} args={[100, 100]} rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
                    <meshStandardMaterial color="#80604D" />
                </Plane>
                
                <group>
                    {furniture.map(item => (
                        <Furniture
                            key={item.id}
                            type={item.type}
                            position={item.position}
                            rotation={item.rotation}
                            scale={item.scale}
                        />
                    ))}
                </group>
                
                <Player isMenuOpen={isMenuOpen} />
            </Suspense>
        </Canvas>
    );
}

export default Scene;
