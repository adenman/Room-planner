/*
* =================================================================
* CoffeeTable.jsx
* FILE: src/components/models/CoffeeTable.jsx
* =================================================================
*/
import React from 'react';
import { Box } from '@react-three/drei';

export const CoffeeTable = React.forwardRef((props, ref) => {
    return (
        <group {...props} ref={ref} name="coffee_table">
            <Box args={[4, 0.3, 2.5]} castShadow receiveShadow position={[0, 1.2, 0]}>
                <meshStandardMaterial color={0x8d6e63} />
            </Box>
            <Box args={[3.5, 1.2, 2]} castShadow receiveShadow position={[0, 0.6, 0]}>
                <meshStandardMaterial color={0x8d6e63} />
            </Box>
        </group>
    );
});
