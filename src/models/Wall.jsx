/*
* =================================================================
* Wall.jsx
* FILE: src/components/models/Wall.jsx
* =================================================================
*/
import React from 'react';
import { Box } from '@react-three/drei';

export const Wall = React.forwardRef((props, ref) => {
    return (
        <Box {...props} ref={ref} name="wall" args={[10, 8, 0.5]} castShadow receiveShadow position-y={4}>
            <meshStandardMaterial color={props.color || 0xdadada} />
        </Box>
    );
});
