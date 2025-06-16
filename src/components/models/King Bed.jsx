import React from 'react';
import { Box } from '@react-three/drei';

export const KingBed = React.forwardRef((props, ref) => {
    return (
        <group {...props} ref={ref} name="bed_king">
            {/* Frame */}
            <Box args={[7, 1.5, 8]} castShadow receiveShadow position={[0, 0.75, 0]}>
                <meshStandardMaterial color={0x424242} />
            </Box>
            {/* Headboard */}
            <Box args={[7.2, 4, 0.5]} castShadow receiveShadow position={[0, 2, -3.75]}>
                <meshStandardMaterial color={0x5d4037} />
            </Box>
            {/* Mattress */}
            <Box args={[7, 1.2, 8]} castShadow receiveShadow position={[0, 1.5 + 0.6, 0]}>
                <meshStandardMaterial color={0xf5f5f5} />
            </Box>
            {/* Pillows */}
            <Box args={[2.5, 0.5, 1.5]} castShadow receiveShadow position={[-1.5, 2.8, -2.5]}>
                 <meshStandardMaterial color={0xffffff} />
            </Box>
            <Box args={[2.5, 0.5, 1.5]} castShadow receiveShadow position={[1.5, 2.8, -2.5]}>
                 <meshStandardMaterial color={0xffffff} />
            </Box>
        </group>
    );
});