import React from 'react';
import { Box } from '@react-three/drei';

export const Toilet = React.forwardRef((props, ref) => {
    return (
        <group {...props} ref={ref} name="toilet">
            <Box args={[1.5, 1, 2]} castShadow receiveShadow position={[0, 0.5, 0]}>
                <meshStandardMaterial color={0xffffff} />
            </Box>
            <Box args={[1.5, 1.5, 0.8]} castShadow receiveShadow position={[0, 1.75, -0.6]}>
                 <meshStandardMaterial color={0xffffff} />
            </Box>
        </group>
    );
});