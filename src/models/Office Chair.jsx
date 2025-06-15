/*
* =================================================================
* OfficeChair.jsx
* FILE: src/components/models/OfficeChair.jsx
* =================================================================
*/
import React from 'react';
import { Box, Cylinder } from '@react-three/drei';

export const OfficeChair = React.forwardRef((props, ref) => {
    return (
        <group {...props} ref={ref} name="office_chair">
            <Cylinder args={[0.2, 0.2, 1.5, 16]} castShadow receiveShadow position={[0, 0.75, 0]}>
                <meshStandardMaterial color={0x212121} />
            </Cylinder>
            <Box args={[1.8, 0.4, 1.8]} castShadow receiveShadow position={[0, 1.5, 0]}>
                 <meshStandardMaterial color={0x424242} />
            </Box>
            <Box args={[1.8, 2.2, 0.3]} castShadow receiveShadow position={[0, 2.8, -0.75]}>
                 <meshStandardMaterial color={0x424242} />
            </Box>
            {[...Array(5)].map((_, i) => (
                <Cylinder key={i} args={[0.1, 0.1, 1.2, 8]} castShadow receiveShadow rotation-z={Math.PI / 4} rotation-y={i * (Math.PI * 2 / 5)} position={[0, 0.5, 0]}>
                    <meshStandardMaterial color={0x212121} />
                </Cylinder>
            ))}
        </group>
    );
});
