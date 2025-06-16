import React from 'react';
import { Box } from '@react-three/drei';

export const CoffeeTable = React.forwardRef((props, ref) => {
    return (
        <group {...props} ref={ref} name="coffee_table">
            <Box args={[4.5, 0.2, 2.5]} castShadow receiveShadow position={[0, 1.5, 0]}>
                <meshStandardMaterial color={0x8d6e63} />
            </Box>
            <Box args={[0.3, 1.5, 0.3]} castShadow receiveShadow position={[-2, 0.75, -1]}>
                <meshStandardMaterial color={0x664c40} />
            </Box>
            <Box args={[0.3, 1.5, 0.3]} castShadow receiveShadow position={[2, 0.75, -1]}>
                <meshStandardMaterial color={0x664c40} />
            </Box>
            <Box args={[0.3, 1.5, 0.3]} castShadow receiveShadow position={[-2, 0.75, 1]}>
                <meshStandardMaterial color={0x664c40} />
            </Box>
            <Box args={[0.3, 1.5, 0.3]} castShadow receiveShadow position={[2, 0.75, 1]}>
                <meshStandardMaterial color={0x664c40} />
            </Box>
            <Box args={[4, 0.1, 2]} castShadow receiveShadow position={[0, 0.5, 0]}>
                <meshStandardMaterial color={0x8d6e63} />
            </Box>
        </group>
    );
});