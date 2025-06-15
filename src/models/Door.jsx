/*
* =================================================================
* Door.jsx
* FILE: src/components/models/Door.jsx
* =================================================================
*/
import React from 'react';
import { Box, Cylinder } from '@react-three/drei';

export const Door = React.forwardRef((props, ref) => {
    return (
        <group {...props} ref={ref} name="door" position-y={4}>
            <Box args={[4, 8, 0.5]} castShadow receiveShadow>
                <meshStandardMaterial color={0x5d4037} />
            </Box>
            <Cylinder args={[0.2, 0.2, 0.7, 16]} rotation-x={Math.PI / 2} position={[-1.5, 0, 0]}>
                <meshStandardMaterial color={0xffd700} />
            </Cylinder>
        </group>
    );
});
