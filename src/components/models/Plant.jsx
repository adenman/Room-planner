import React from 'react';
import { Cylinder } from '@react-three/drei';

export const Plant = React.forwardRef((props, ref) => {
    return (
        <group {...props} ref={ref} name="plant">
            <Cylinder args={[1, 1.2, 1.5, 32]} castShadow receiveShadow position={[0, 0.75, 0]}>
                <meshStandardMaterial color={0x8d6e63} />
            </Cylinder>
            <Cylinder args={[0.1, 1.5, 3, 32]} castShadow receiveShadow position={[0, 2.25, 0]}>
                 <meshStandardMaterial color={0x4caf50} />
            </Cylinder>
        </group>
    );
});