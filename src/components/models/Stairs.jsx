import React from 'react';
import { Box, Plane } from '@react-three/drei';

export const Stairs = React.forwardRef((props, ref) => {
    const height = 8;
    const depth = 10;
    const rampHypot = Math.sqrt(height*height + depth*depth);

    return (
        <group {...props} ref={ref} name="stairs" position-y={0.4}>
             {[...Array(10)].map((_, i) => (
                <Box key={i} args={[4, 0.8, 1]} castShadow receiveShadow position={[0, i * 0.8, i * -1]}>
                    <meshStandardMaterial color={0x8d6e63} />
                </Box>
            ))}
            {/* Invisible ramp for player physics */}
            <Plane args={[4, rampHypot]} name="stair_ramp" rotation-x={-Math.atan2(height, depth)} position={[0, 4, -4.5]}>
                <meshBasicMaterial visible={false} />
            </Plane>
        </group>
    );
});