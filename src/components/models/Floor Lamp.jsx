import React from 'react';
import { Cylinder } from '@react-three/drei';

export const FloorLamp = React.forwardRef((props, ref) => {
    return (
        <group {...props} ref={ref} name="floor_lamp">
            <Cylinder args={[1, 1, 0.2, 32]} castShadow receiveShadow>
                <meshStandardMaterial color={0x555555} />
            </Cylinder>
            <Cylinder args={[0.15, 0.15, 6, 32]} castShadow receiveShadow position-y={3}>
                <meshStandardMaterial color={0x555555} />
            </Cylinder>
             <Cylinder args={[0.8, 1, 1, 32]} castShadow receiveShadow position-y={6}>
                 <meshStandardMaterial color={0xfff5e1} />
            </Cylinder>
            <pointLight castShadow intensity={20} distance={15} decay={1} position-y={5.8} />
        </group>
    );
});