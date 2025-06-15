/*
* =================================================================
* DiningTable.jsx
* FILE: src/components/models/DiningTable.jsx
* =================================================================
*/
import React from 'react';
import { Cylinder } from '@react-three/drei';

export const DiningTable = React.forwardRef((props, ref) => {
    return (
        <group {...props} ref={ref} name="dining_table">
            <Cylinder args={[3, 3, 0.4, 64]} castShadow receiveShadow position={[0, 3, 0]}>
                <meshStandardMaterial color={0x795548} />
            </Cylinder>
            <Cylinder args={[0.8, 1.5, 3, 64]} castShadow receiveShadow position={[0, 1.5, 0]}>
                <meshStandardMaterial color={0x795548} />
            </Cylinder>
        </group>
    );
});
