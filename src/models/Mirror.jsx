/*
* =================================================================
* Mirror.jsx
* FILE: src/components/models/Mirror.jsx
* =================================================================
*/
import React from 'react';
import { Box } from '@react-three/drei';

export const Mirror = React.forwardRef((props, ref) => {
    return (
        <group {...props} ref={ref} name="mirror" position-y={5}>
            <Box args={[3, 4, 0.2]} castShadow receiveShadow>
                <meshStandardMaterial color={0x757575} />
            </Box>
            <Box args={[2.8, 3.8, 0.1]} position-z={0.1}>
                 <meshStandardMaterial color={0xeeeeee} roughness={0} metalness={0.9} />
            </Box>
        </group>
    );
});
