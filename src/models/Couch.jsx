/*
* =================================================================
* Couch.jsx
* FILE: src/components/models/Couch.jsx
* =================================================================
*/
import React from 'react';
import * as THREE from 'three';
import { Box } from '@react-three/drei';

export const Couch = React.forwardRef((props, ref) => {
  return (
    <group {...props} ref={ref} name="couch">
      <Box args={[8, 2, 3.5]} castShadow receiveShadow position={[0,1,0]}>
        <meshStandardMaterial color={0x5a6a7a} />
      </Box>
      <Box args={[8, 2, 0.8]} castShadow receiveShadow position={[0, 3, -1.35]}>
        <meshStandardMaterial color={0x5a6a7a} />
      </Box>
      <Box args={[0.8, 1.5, 3.5]} castShadow receiveShadow position={[-4.4, 1, 0]}>
        <meshStandardMaterial color={0x5a6a7a} />
      </Box>
      <Box args={[0.8, 1.5, 3.5]} castShadow receiveShadow position={[4.4, 1, 0]}>
        <meshStandardMaterial color={0x5a6a7a} />
      </Box>
      <Box args={[3.8, 0.7, 3]} castShadow receiveShadow position={[-2, 2.35, 0]}>
        <meshStandardMaterial color={0x6b7b8b} />
      </Box>
      <Box args={[3.8, 0.7, 3]} castShadow receiveShadow position={[2, 2.35, 0]}>
        <meshStandardMaterial color={0x6b7b8b} />
      </Box>
    </group>
  );
});
