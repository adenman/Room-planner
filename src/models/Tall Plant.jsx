/*
* =================================================================
* TallPlant.jsx
* FILE: src/components/models/TallPlant.jsx
* =================================================================
*/
import React from 'react';
import { Cylinder } from '@react-three/drei';

export const TallPlant = React.forwardRef((props, ref) => {
    return (
        <group {...props} ref={ref} name="tall_plant">
            <Cylinder args={[1.2, 1.5, 3, 32]} castShadow receiveShadow position={[0, 1.5, 0]}>
                <meshStandardMaterial color={0x795548} />
            </Cylinder>
            <Cylinder args={[0.2, 2.5, 5, 32]} castShadow receiveShadow position={[0, 5, 0]}>
                <meshStandardMaterial color={0x66bb6a} />
            </Cylinder>
        </group>
    );
});
