import React from 'react';
import { Box, Cylinder } from '@react-three/drei';

export const Dresser = React.forwardRef((props, ref) => {
    return (
        <group {...props} ref={ref} name="dresser" position-y={1.5}>
            <Box args={[6, 3, 2]} castShadow receiveShadow >
                <meshStandardMaterial color={0x6d4c41} />
            </Box>
            {[...Array(3)].map((_, i) => (
                <group key={i}>
                    <Box args={[5.5, 0.1, 1.8]} castShadow receiveShadow position={[0, (i * 1) - 0.5, 0.1]}>
                        <meshStandardMaterial color={0x4e342e} />
                    </Box>
                    <Cylinder args={[0.2, 0.2, 0.1, 16]} castShadow receiveShadow position={[0, (i * 1) - 0.5, 1]}>
                        <meshStandardMaterial color={0x212121} />
                    </Cylinder>
                </group>
            ))}
        </group>
    );
});