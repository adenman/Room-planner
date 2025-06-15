/*
* =================================================================
* Bathtub.jsx
* FILE: src/components/models/Bathtub.jsx
* =================================================================
*/
import React from 'react';
import { Box } from '@react-three/drei';

export const Bathtub = React.forwardRef((props, ref) => {
    return (
        <group {...props} ref={ref} name="bathtub" position-y={1}>
            <Box args={[6, 2, 3]} castShadow receiveShadow>
                <meshStandardMaterial color={0xf5f5f5} />
            </Box>
            <Box args={[5.5, 2, 2.5]} position={[0, 0.5, 0]}>
                <meshStandardMaterial color={0x455a64} />
            </Box>
        </group>
    );
});
