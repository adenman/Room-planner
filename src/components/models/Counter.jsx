import React from 'react';
import { Box } from '@react-three/drei';

export const Counter = React.forwardRef((props, ref) => {
    return (
        <group {...props} ref={ref} name="counter">
            <Box args={[8, 3, 2.5]} castShadow receiveShadow position={[0, 1.5, 0]}>
                <meshStandardMaterial color={0xe0e0e0} />
            </Box>
            <Box args={[8, 0.2, 2.6]} castShadow receiveShadow position={[0, 3.1, 0]}>
                <meshStandardMaterial color={0x424242} />
            </Box>
        </group>
    );
});