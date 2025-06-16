import React from 'react';
import { Box } from '@react-three/drei';

export const Chair = React.forwardRef((props, ref) => {
  return (
    <group {...props} ref={ref} name="chair">
      <Box args={[3, 2, 3]} castShadow receiveShadow position={[0, 1, 0]}>
        <meshStandardMaterial color={0x6d8a9e} />
      </Box>
      <Box args={[3, 2.2, 0.6]} castShadow receiveShadow position={[0, 3, -1.2]}>
        <meshStandardMaterial color={0x6d8a9e} />
      </Box>
      <Box args={[2.8, 0.5, 2.8]} castShadow receiveShadow position={[0, 2.25, 0]}>
        <meshStandardMaterial color={0x7daacb} />
      </Box>
    </group>
  );
});