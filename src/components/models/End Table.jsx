import React from 'react';
import { Cylinder } from '@react-three/drei';

export const EndTable = React.forwardRef((props, ref) => {
    return (
        <group {...props} ref={ref} name="end_table">
            <Cylinder args={[1.2, 1.2, 1.8, 32]} castShadow receiveShadow position={[0, 0.9, 0]}>
                <meshStandardMaterial color={0x8d6e63} />
            </Cylinder>
        </group>
    );
});