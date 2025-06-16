import React from 'react';
import { Box } from '@react-three/drei';

export const TvStand = React.forwardRef((props, ref) => {
    return (
        <group {...props} ref={ref} name="tv_stand">
            <Box args={[8, 0.5, 2]} castShadow receiveShadow position={[0, 1, 0]}>
                 <meshStandardMaterial color={0x3e2723} />
            </Box>
            <Box args={[8, 1, 2]} castShadow receiveShadow position={[0, 0.5, 0]}>
                 <meshStandardMaterial color={0x3e2723} />
            </Box>
             <group name="tv">
                <Box args={[6, 3.5, 0.2]} castShadow receiveShadow position={[0, 3.25, 0]}>
                    <meshStandardMaterial color={0x111111} />
                </Box>
                 <Box args={[2, 0.2, 0.5]} castShadow receiveShadow position={[0, 1.6, 0]}>
                    <meshStandardMaterial color={0x111111} />
                </Box>
            </group>
        </group>
    );
});