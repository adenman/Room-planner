/*
* =================================================================
* KingBed.jsx
* FILE: src/components/models/KingBed.jsx
* =================================================================
*/
import React from 'react';
import { Box } from '@react-three/drei';

export const KingBed = React.forwardRef((props, ref) => {
    return (
        <group {...props} ref={ref} name="bed_king">
            <Box args={[7, 1.5, 8]} castShadow receiveShadow position={[0, 0.75, 0]}>
                <meshStandardMaterial color={0x424242} />
            </Box>
            <Box args={[7.2, 4, 0.5]} castShadow receiveShadow position={[0, 2, -3.75]}>
                <meshStandardMaterial color={0x5d4037} />
            </Box>
            <Box args={[7, 1.2, 8]} castShadow receiveShadow position={[0, 1.5 + 0.6, 0]}>
                <meshStandardMaterial color={0xf5f5f5} />
            </Box>
        </group>
    );
});
