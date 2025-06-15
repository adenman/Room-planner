/*
* =================================================================
* Nightstand.jsx
* FILE: src/components/models/Nightstand.jsx
* =================================================================
*/
import React from 'react';
import { Box } from '@react-three/drei';

export const Nightstand = React.forwardRef((props, ref) => {
    return (
        <group {...props} ref={ref} name="nightstand">
            <Box args={[2, 2, 1.5]} castShadow receiveShadow position={[0, 1, 0]}>
                <meshStandardMaterial color={0x8d6e63} />
            </Box>
        </group>
    );
});
