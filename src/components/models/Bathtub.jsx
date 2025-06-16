import React from 'react';
import { Box, Cylinder } from '@react-three/drei';

export const Bathtub = React.forwardRef((props, ref) => {
    return (
        <group {...props} ref={ref} name="bathtub" position-y={1}>
            <Box args={[6, 2, 3]} castShadow receiveShadow>
                <meshStandardMaterial color={0xf5f5f5} />
            </Box>
            <Box args={[5.5, 2, 2.5]} position-y={0.5}>
                <meshStandardMaterial color={0x455a64} />
            </Box>
            <Cylinder args={[0.2, 0.2, 0.2]} castShadow receiveShadow position={[-2.5, 1, 0]}>
                 <meshStandardMaterial color={0xc0c0c0} metalness={0.8} roughness={0.2} />
            </Cylinder>
        </group>
    );
});