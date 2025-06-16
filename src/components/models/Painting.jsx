import React from 'react';
import * as THREE from 'three';
import { Box } from '@react-three/drei';

export const Painting = React.forwardRef((props, ref) => {
    return (
        <group {...props} ref={ref} name="painting" position-y={5}>
            <Box args={[3, 4, 0.2]} castShadow receiveShadow>
                <meshStandardMaterial color={0x333333} />
            </Box>
            <Box args={[2.8, 3.8, 0.2]} position-z={0.01}>
                <meshStandardMaterial color={new THREE.Color(Math.random() * 0xffffff)} />
            </Box>
        </group>
    );
});