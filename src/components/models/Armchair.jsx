import React from 'react';
import { Box } from '@react-three/drei';

export const Armchair = React.forwardRef((props, ref) => {
  return (
    <group {...props} ref={ref} name="armchair">
      {/* Seat */}
      <Box args={[2.5, 1.5, 2.5]} castShadow receiveShadow position={[0, 0.75, 0]}>
        <meshStandardMaterial color={0x787878} />
      </Box>
      {/* Back */}
      <Box args={[2.5, 2, 0.5]} castShadow receiveShadow position={[0, 2.25, -1]}>
        <meshStandardMaterial color={0x787878} />
      </Box>
      {/* Arms */}
      <Box args={[0.5, 1, 2.5]} castShadow receiveShadow position={[-1.5, 1.25, 0]}>
        <meshStandardMaterial color={0x686868} />
      </Box>
      <Box args={[0.5, 1, 2.5]} castShadow receiveShadow position={[1.5, 1.25, 0]}>
        <meshStandardMaterial color={0x686868} />
      </Box>
    </group>
  );
});