import React from 'react';
import { Box, Cylinder } from '@react-three/drei';

export const Nightstand = React.forwardRef((props, ref) => {
    return (
        <group {...props} ref={ref} name="nightstand">
            {/* Main Body */}
            <Box args={[2, 2, 1.5]} castShadow receiveShadow position={[0, 1, 0]}>
                <meshStandardMaterial color={0x8d6e63} />
            </Box>
            {/* Top Surface */}
            <Box args={[2.1, 0.2, 1.6]} castShadow receiveShadow position={[0, 2.1, 0]}>
                 <meshStandardMaterial color={0x795548} />
            </Box>
            {/* Drawer Front */}
            <Box args={[1.8, 0.8, 0.1]} castShadow receiveShadow position={[0, 1.4, 0.7]}>
                <meshStandardMaterial color={0x9d7f72} />
            </Box>
             {/* Handle */}
            <Cylinder args={[0.1, 0.1, 0.2, 12]} castShadow receiveShadow rotation-x={Math.PI / 2} position={[0, 1.4, 0.8]}>
                <meshStandardMaterial color={0x504030} />
            </Cylinder>
        </group>
    );
});