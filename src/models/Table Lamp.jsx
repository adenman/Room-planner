/*
* =================================================================
* TableLamp.jsx
* FILE: src/components/models/TableLamp.jsx
* =================================================================
*/
import React from 'react';
import { Cylinder } from '@react-three/drei';

export const TableLamp = React.forwardRef((props, ref) => {
    return (
        <group {...props} ref={ref} name="table_lamp">
            <Cylinder args={[0.5, 0.5, 0.1, 32]} castShadow receiveShadow position-y={0.05}>
                <meshStandardMaterial color={0x90a4ae} />
            </Cylinder>
            <Cylinder args={[0.1, 0.1, 1, 32]} castShadow receiveShadow position-y={0.6}>
                 <meshStandardMaterial color={0x90a4ae} />
            </Cylinder>
             <Cylinder args={[0.4, 0.6, 0.7, 32]} castShadow receiveShadow position-y={1.4}>
                <meshStandardMaterial color={0xececec} />
            </Cylinder>
            <pointLight castShadow intensity={5} distance={8} decay={1} position-y={1.3} />
        </group>
    );
});
