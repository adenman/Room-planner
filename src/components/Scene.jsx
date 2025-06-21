import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Plane } from '@react-three/drei';
import Player from './Player';
import * as Models from './models';

// FIX: We now destructure 'id' and 'type' out. The '...props' object
// (containing position, rotation, etc.) is all that gets passed to the model.
const Furniture = ({ type, id, ...props }) => {
    const Component = Models[type];
    return Component ? <Component {...props} /> : null;
};

export function Scene({ furniture, isMenuOpen, setCamera }) {
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
                
                <Plane args={[100, 100]} rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
                    <meshStandardMaterial color="#80604D" />
                </Plane>
                
                <group>
                    {furniture.map(item => (
                        // The `id` is still used for React's key, but the Furniture
                        // component above will prevent it from being passed to Three.js.
                        <Furniture
                            key={item.id}
                            {...item}
                        />
                    ))}
                </group>
                
                <Player isMenuOpen={isMenuOpen} onCameraReady={setCamera} />
            </Suspense>
        </Canvas>
    );
}

export default Scene;