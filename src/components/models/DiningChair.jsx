import React from 'react';
import { Box, Cylinder } from '@react-three/drei';

export const DiningChair = React.forwardRef((props, ref) => {
    return (
        <group {...props} ref={ref} name="dining_chair">
            <Cylinder args={[1, 1, 0.2, 64]} castShadow receiveShadow position={[0, 1.5, 0]}>
                <meshStandardMaterial color={0xa1887f} />
            </Cylinder>
            <Cylinder args={[0.2, 0.2, 1.5, 8]} castShadow receiveShadow position={[0, 0.75, 0]}>
                <meshStandardMaterial color={0xa1887f} />
            </Cylinder>
             <Box args={[1.8, 2, 0.2]} castShadow receiveShadow position={[0, 2.5, -0.8]}>
                <meshStandardMaterial color={0xa1887f} />
            </Box>
        </group>
    );
});