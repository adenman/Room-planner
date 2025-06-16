import React from 'react';
import { Box } from '@react-three/drei';

export const Refrigerator = React.forwardRef((props, ref) => {
    return (
        <group {...props} ref={ref} name="refrigerator" position-y={3.5}>
            <Box args={[3.5, 7, 3]} castShadow receiveShadow>
                <meshStandardMaterial color={0xe0e0e0} />
            </Box>
            <Box args={[0.2, 3, 0.2]} castShadow receiveShadow position={[1.8, 1.5, 1.5]}>
                <meshStandardMaterial color={0x757575} />
            </Box>
        </group>
    );
});