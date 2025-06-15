/*
* =================================================================
* Rug.jsx
* FILE: src/components/models/Rug.jsx
* =================================================================
*/
import React from 'react';
import * as THREE from 'three';
import { Plane } from '@react-three/drei';

export const Rug = React.forwardRef((props, ref) => {
    return (
        <Plane {...props} ref={ref} name="rug" args={[10, 6]} rotation-x={-Math.PI / 2} position-y={0.05} receiveShadow>
             <meshStandardMaterial color={0xb71c1c} side={THREE.DoubleSide} />
        </Plane>
    );
});
