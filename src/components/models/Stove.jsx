import React from 'react';
import { Box, Cylinder } from '@react-three/drei';

export const Stove = React.forwardRef((props, ref) => {
    return (
        <group {...props} ref={ref} name="stove">
             <Box args={[3, 3, 2.5]} castShadow receiveShadow position={[0, 1.5, 0]}>
                <meshStandardMaterial color={0x607d8b} />
            </Box>
             <Box args={[3, 2.5, 2.5]} castShadow receiveShadow position={[0, 4.25, 0]}>
                <meshStandardMaterial color={0x37474f} />
            </Box>
             {[...Array(4)].map((_, i) => (
                <Cylinder key={i} args={[0.4, 0.4, 0.1, 32]} castShadow receiveShadow position={[i < 2 ? -0.8 : 0.8, 3.05, i % 2 === 0 ? -0.7 : 0.7]}>
                     <meshStandardMaterial color={0x212121} />
                </Cylinder>
            ))}
        </group>
    );
});