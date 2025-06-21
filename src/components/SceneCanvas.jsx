import React, { Suspense, forwardRef, useImperativeHandle, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { PointerLockControls, Box, Plane } from '@react-three/drei';
import * as Models from './models';

// A generic component to render the correct furniture model based on type
const Furniture = ({ type, ...props }) => {
    const Component = Models[type];
    return Component ? <Component {...props} /> : null;
};

const SceneCanvas = forwardRef((props, ref) => {
    const [furniture, setFurniture] = useState([]);
    
    // This allows the App component to call functions inside this component
    useImperativeHandle(ref, () => ({
        addItem(type) {
            const newItem = {
                id: Date.now(),
                type,
                position: [0, 0.5, -5], // Initial spawn position in front of camera
                rotation: [0, 0, 0],
                scale: [1, 1, 1],
            };
            setFurniture(prev => [...prev, newItem]);
        },

        getSceneState() {
             return { furniture };
        },
        
        loadSceneState(state) {
            setFurniture(state.furniture || []);
        },
        
        clearScene() {
            setFurniture([]);
        }
    }));

    // Placeholder logic for moving items, you'll need to implement this
    // using onPointerDown, onPointerMove, etc. on the Furniture components
    const handleMoveItem = (id, newPosition) => {
        setFurniture(currentFurniture =>
            currentFurniture.map(item =>
                item.id === id ? { ...item, position: newPosition } : item
            )
        );
    };

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

                {furniture.map(item => (
                    <Furniture
                        key={item.id}
                        type={item.type}
                        position={item.position}
                        rotation={item.rotation}
                        scale={item.scale}
                    />
                ))}

                <PointerLockControls />
            </Suspense>
        </Canvas>
    );
});

export default SceneCanvas;
