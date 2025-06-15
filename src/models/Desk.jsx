/*
* =================================================================
* Desk.jsx
* FILE: src/components/models/Desk.jsx
* =================================================================
*/
import React from 'react';
import { Box } from '@react-three/drei';

export const Desk = React.forwardRef((props, ref) => {
    return (
        <group {...props} ref={ref} name="desk">
            <Box args={[7, 0.4, 3]} castShadow receiveShadow position={[0, 3, 0]}>
                <meshStandardMaterial color={0x604020} />
            </Box>
            <group position={[0, 3.2, -0.8]}>
                <Box args={[4, 2.5, 0.3]} castShadow receiveShadow position-y={1.5}>
                    <meshStandardMaterial color={0x111111} />
                </Box>
                <Box args={[1, 0.2, 0.5]} castShadow receiveShadow>
                     <meshStandardMaterial color={0x111111} />
                </Box>
            </group>
            <Box args={[3, 0.1, 1]} castShadow receiveShadow position={[0, 3.2, 0.5]}>
                <meshStandardMaterial color={0x222222} />
            </Box>
            <Box args={[0.4, 3, 2.8]} castShadow receiveShadow position={[-3.3, 1.5, 0]}>
                <meshStandardMaterial color={0x604020} />
            </Box>
             <Box args={[0.4, 3, 2.8]} castShadow receiveShadow position={[3.3, 1.5, 0]}>
                <meshStandardMaterial color={0x604020} />
            </Box>
        </group>
    );
});
