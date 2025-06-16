import React from 'react';
import { Box } from '@react-three/drei';

export const Window = React.forwardRef((props, ref) => {
    return (
        <group {...props} ref={ref} name="window" position-y={5}>
            <Box args={[5, 4, 0.4]} castShadow receiveShadow>
                <meshStandardMaterial color={0xeeebe8} />
            </Box>
            <Box args={[4.7, 3.7, 0.2]}>
                 <meshStandardMaterial color={0x81d4fa} transparent opacity={0.3} />
            </Box>
        </group>
    );
});