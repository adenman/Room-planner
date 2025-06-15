/*
* =================================================================
* Bookshelf.jsx
* FILE: src/components/models/Bookshelf.jsx
* =================================================================
*/
import React from 'react';
import * as THREE from 'three';
import { Box } from '@react-three/drei';

export const Bookshelf = React.forwardRef((props, ref) => {
    return (
        <group {...props} ref={ref} name="bookshelf" position-y={3.5}>
            <Box args={[5, 7, 2]} castShadow receiveShadow>
                <meshStandardMaterial color={0x795548} />
            </Box>
            {[...Array(6)].map((_, i) => (
                <Box key={i} args={[4.8, 0.2, 1.8]} castShadow receiveShadow position={[0, (i * 1.1) - 2.2, 0]}>
                    <meshStandardMaterial color={0x5d4037} />
                </Box>
            ))}
             {[...Array(5)].map((_, i) => (
                 <React.Fragment key={i}>
                    {[...Array(5)].map((_, j) => (
                        <Box key={j} args={[0.4, 0.9, 1.5]} castShadow receiveShadow position={[(j * 0.9) - 1.8, ((i * 1.1) - 2.2) + 0.55, 0]}>
                             <meshStandardMaterial color={new THREE.Color(Math.random() * 0xffffff)} />
                        </Box>
                    ))}
                </React.Fragment>
            ))}
        </group>
    );
});
