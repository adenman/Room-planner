import React from 'react';
import { Box } from '@react-three/drei';

export const FilingCabinet = React.forwardRef((props, ref) => {
    return (
        <group {...props} ref={ref} name="filing_cabinet" position-y={2}>
            <Box args={[2, 4, 2.5]} castShadow receiveShadow>
                <meshStandardMaterial color={0x9e9e9e} />
            </Box>
            {[...Array(4)].map((_, i) => (
                 <Box key={i} args={[1.8, 0.1, 2.3]} castShadow receiveShadow position={[0, (i * 1) - 1.5, 0.1]}>
                    <meshStandardMaterial color={0x616161} />
                </Box>
            ))}
        </group>
    );
});