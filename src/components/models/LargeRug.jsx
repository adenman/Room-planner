import React from 'react';
import * as THREE from 'three';
import { Plane } from '@react-three/drei';

export const LargeRug = React.forwardRef((props, ref) => {
    return (
        <Plane {...props} ref={ref} name="large_rug" args={[16, 12]} rotation-x={-Math.PI / 2} position-y={0.05} receiveShadow>
             <meshStandardMaterial color={0x455a64} side={THREE.DoubleSide} />
        </Plane>
    );
});