import React from 'react';
import { Box } from '@react-three/drei';

export const Fireplace = React.forwardRef((props, ref) => {
    return (
        <group {...props} ref={ref} name="fireplace">
            <Box args={[6, 5, 2]} castShadow receiveShadow>
                <meshStandardMaterial color={0x616161} />
            </Box>
            <Box args={[4, 3, 2]} position={[0, -0.5, 0.1]}>
                <meshStandardMaterial color={0x111111} />
            </Box>
            <Box args={[7, 0.5, 2.5]} castShadow receiveShadow position={[0, 2.75, 0]}>
                <meshStandardMaterial color={0x424242} />
            </Box>
        </group>
    );
});