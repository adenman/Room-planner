/*
* =================================================================
* KitchenIsland.jsx
* FILE: src/components/models/KitchenIsland.jsx
* =================================================================
*/
import React from 'react';
import { Box } from '@react-three/drei';

export const KitchenIsland = React.forwardRef((props, ref) => {
    return (
        <group {...props} ref={ref} name="kitchen_island">
            <Box args={[7, 3.2, 4]} castShadow receiveShadow position={[0, 1.6, 0]}>
                 <meshStandardMaterial color={0xf5f5f5} />
            </Box>
            <Box args={[7, 0.2, 4.2]} castShadow receiveShadow position={[0, 3.3, 0]}>
                 <meshStandardMaterial color={0x37474f} />
            </Box>
        </group>
    );
});
