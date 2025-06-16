/*
* =================================================================
* Bathtub.jsx
* FILE: src/components/models/Bathtub.jsx
* =================================================================
*/
import React from 'react';
import { Box, Cylinder } from '@react-three/drei';

export const Bathtub = React.forwardRef((props, ref) => {
    return (
        <group {...props} ref={ref} name="bathtub" position-y={1}>
            <Box args={[6, 2, 3]} castShadow receiveShadow>
                <meshStandardMaterial color={0xf5f5f5} />
            </Box>
            <Box args={[5.5, 2, 2.5]} position-y={0.5}>
                <meshStandardMaterial color={0x455a64} />
            </Box>
            <Cylinder args={[0.2, 0.2, 0.2]} castShadow receiveShadow position={[-2.5, 1, 0]}>
                 <meshStandardMaterial color={0xc0c0c0} metalness={0.8} roughness={0.2} />
            </Cylinder>
        </group>
    );
});

/*
* =================================================================
* KingBed.jsx
* FILE: src/components/models/KingBed.jsx
* =================================================================
*/
import React from 'react';
import { Box } from '@react-three/drei';

export const KingBed = React.forwardRef((props, ref) => {
    return (
        <group {...props} ref={ref} name="bed_king">
            {/* Frame */}
            <Box args={[7, 1.5, 8]} castShadow receiveShadow position={[0, 0.75, 0]}>
                <meshStandardMaterial color={0x424242} />
            </Box>
            {/* Headboard */}
            <Box args={[7.2, 4, 0.5]} castShadow receiveShadow position={[0, 2, -3.75]}>
                <meshStandardMaterial color={0x5d4037} />
            </Box>
            {/* Mattress */}
            <Box args={[7, 1.2, 8]} castShadow receiveShadow position={[0, 1.5 + 0.6, 0]}>
                <meshStandardMaterial color={0xf5f5f5} />
            </Box>
            {/* Pillows */}
            <Box args={[2.5, 0.5, 1.5]} castShadow receiveShadow position={[-1.5, 2.8, -2.5]}>
                 <meshStandardMaterial color={0xffffff} />
            </Box>
            <Box args={[2.5, 0.5, 1.5]} castShadow receiveShadow position={[1.5, 2.8, -2.5]}>
                 <meshStandardMaterial color={0xffffff} />
            </Box>
        </group>
    );
});

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


/*
* =================================================================
* Chair.jsx
* FILE: src/components/models/Chair.jsx
* =================================================================
*/
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
            <Box args={[4.5, 0.2, 2.5]} castShadow receiveShadow position={[0, 1.5, 0]}>
                <meshStandardMaterial color={0x8d6e63} />
            </Box>
            <Box args={[0.3, 1.5, 0.3]} castShadow receiveShadow position={[-2, 0.75, -1]}>
                <meshStandardMaterial color={0x664c40} />
            </Box>
            <Box args={[0.3, 1.5, 0.3]} castShadow receiveShadow position={[2, 0.75, -1]}>
                <meshStandardMaterial color={0x664c40} />
            </Box>
            <Box args={[0.3, 1.5, 0.3]} castShadow receiveShadow position={[-2, 0.75, 1]}>
                <meshStandardMaterial color={0x664c40} />
            </Box>
            <Box args={[0.3, 1.5, 0.3]} castShadow receiveShadow position={[2, 0.75, 1]}>
                <meshStandardMaterial color={0x664c40} />
            </Box>
            <Box args={[4, 0.1, 2]} castShadow receiveShadow position={[0, 0.5, 0]}>
                <meshStandardMaterial color={0x8d6e63} />
            </Box>
        </group>
    );
});


/*
* =================================================================
* Couch.jsx
* FILE: src/components/models/Couch.jsx
* =================================================================
*/
import React from 'react';
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


/*
* =================================================================
* Desk.jsx
* FILE: src/components/models/Desk.jsx
* =================================================================
*/
import React from 'react';
import { Box } from '@react-three/drei';

export const Desk = React.forwardRef((props, ref) => {
    return (
        <group {...props} ref={ref} name="desk">
            <Box args={[7, 0.4, 3]} castShadow receiveShadow position={[0, 3, 0]}>
                <meshStandardMaterial color={0x604020} />
            </Box>
            <group position={[0, 3.2, -0.8]}>
                <Box args={[4, 2.5, 0.3]} castShadow receiveShadow position-y={1.5}>
                    <meshStandardMaterial color={0x111111} />
                </Box>
                <Box args={[1, 0.2, 0.5]} castShadow receiveShadow>
                     <meshStandardMaterial color={0x111111} />
                </Box>
            </group>
            <Box args={[3, 0.1, 1]} castShadow receiveShadow position={[0, 3.2, 0.5]}>
                <meshStandardMaterial color={0x222222} />
            </Box>
            <Box args={[0.4, 3, 2.8]} castShadow receiveShadow position={[-3.3, 1.5, 0]}>
                <meshStandardMaterial color={0x604020} />
            </Box>
             <Box args={[0.4, 3, 2.8]} castShadow receiveShadow position={[3.3, 1.5, 0]}>
                <meshStandardMaterial color={0x604020} />
            </Box>
        </group>
    );
});


/*
* =================================================================
* DiningChair.jsx
* FILE: src/components/models/DiningChair.jsx
* =================================================================
*/
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


/*
* =================================================================
* DiningTable.jsx
* FILE: src/components/models/DiningTable.jsx
* =================================================================
*/
import React from 'react';
import { Cylinder } from '@react-three/drei';

export const DiningTable = React.forwardRef((props, ref) => {
    return (
        <group {...props} ref={ref} name="dining_table">
            <Cylinder args={[3, 3, 0.4, 64]} castShadow receiveShadow position={[0, 3, 0]}>
                <meshStandardMaterial color={0x795548} />
            </Cylinder>
            <Cylinder args={[0.8, 1.5, 3, 64]} castShadow receiveShadow position={[0, 1.5, 0]}>
                <meshStandardMaterial color={0x795548} />
            </Cylinder>
        </group>
    );
});


/*
* =================================================================
* Door.jsx
* FILE: src/components/models/Door.jsx
* =================================================================
*/
import React from 'react';
import { Box, Cylinder } from '@react-three/drei';

export const Door = React.forwardRef((props, ref) => {
    return (
        <group {...props} ref={ref} name="door" position-y={4}>
            <Box args={[4, 8, 0.5]} castShadow receiveShadow>
                <meshStandardMaterial color={0x5d4037} />
            </Box>
            <Cylinder args={[0.2, 0.2, 0.7, 16]} rotation-x={Math.PI / 2} position={[-1.5, 0, 0]}>
                <meshStandardMaterial color={0xffd700} />
            </Cylinder>
        </group>
    );
});


/*
* =================================================================
* Dresser.jsx
* FILE: src/components/models/Dresser.jsx
* =================================================================
*/
import React from 'react';
import { Box, Cylinder } from '@react-three/drei';

export const Dresser = React.forwardRef((props, ref) => {
    return (
        <group {...props} ref={ref} name="dresser" position-y={1.5}>
            <Box args={[6, 3, 2]} castShadow receiveShadow >
                <meshStandardMaterial color={0x6d4c41} />
            </Box>
            {[...Array(3)].map((_, i) => (
                <group key={i}>
                    <Box args={[5.5, 0.1, 1.8]} castShadow receiveShadow position={[0, (i * 1) - 0.5, 0.1]}>
                        <meshStandardMaterial color={0x4e342e} />
                    </Box>
                    <Cylinder args={[0.2, 0.2, 0.1, 16]} castShadow receiveShadow position={[0, (i * 1) - 0.5, 1]}>
                        <meshStandardMaterial color={0x212121} />
                    </Cylinder>
                </group>
            ))}
        </group>
    );
});

/*
* =================================================================
* EndTable.jsx
* FILE: src/components/models/EndTable.jsx
* =================================================================
*/
import React from 'react';
import { Cylinder } from '@react-three/drei';

export const EndTable = React.forwardRef((props, ref) => {
    return (
        <group {...props} ref={ref} name="end_table">
            <Cylinder args={[1.2, 1.2, 1.8, 32]} castShadow receiveShadow position={[0, 0.9, 0]}>
                <meshStandardMaterial color={0x8d6e63} />
            </Cylinder>
        </group>
    );
});


/*
* =================================================================
* FilingCabinet.jsx
* FILE: src/components/models/FilingCabinet.jsx
* =================================================================
*/
import React from 'react';
import { Box } from '@react-three/drei';

export const FilingCabinet = React.forwardRef((props, ref) => {
    return (
        <group {...props} ref={ref} name="filing_cabinet" position-y={2}>
            <Box args={[2, 4, 2.5]} castShadow receiveShadow>
                <meshStandardMaterial color={0x9e9e9e} />
            </Box>
            {[...Array(4)].map((_, i) => (
                 <Box key={i} args={[1.8, 0.1, 2.3]} castShadow receiveShadow position={[0, (i * 1) - 1.5, 0.1]}>
                    <meshStandardMaterial color={0x616161} />
                </Box>
            ))}
        </group>
    );
});

/*
* =================================================================
* Fireplace.jsx
* FILE: src/components/models/Fireplace.jsx
* =================================================================
*/
import React from 'react';
import { Box } from '@react-three/drei';

export const Fireplace = React.forwardRef((props, ref) => {
    return (
        <group {...props} ref={ref} name="fireplace">
            <Box args={[6, 5, 2]} castShadow receiveShadow>
                <meshStandardMaterial color={0x616161} />
            </Box>
            <Box args={[4, 3, 2]} position={[0, -0.5, 0.1]}>
                <meshStandardMaterial color={0x111111} />
            </Box>
            <Box args={[7, 0.5, 2.5]} castShadow receiveShadow position={[0, 2.75, 0]}>
                <meshStandardMaterial color={0x424242} />
            </Box>
        </group>
    );
});


/*
* =================================================================
* FloorLamp.jsx
* FILE: src/components/models/FloorLamp.jsx
* =================================================================
*/
import React from 'react';
import { Cylinder } from '@react-three/drei';

export const FloorLamp = React.forwardRef((props, ref) => {
    return (
        <group {...props} ref={ref} name="floor_lamp">
            <Cylinder args={[1, 1, 0.2, 32]} castShadow receiveShadow>
                <meshStandardMaterial color={0x555555} />
            </Cylinder>
            <Cylinder args={[0.15, 0.15, 6, 32]} castShadow receiveShadow position-y={3}>
                <meshStandardMaterial color={0x555555} />
            </Cylinder>
             <Cylinder args={[0.8, 1, 1, 32]} castShadow receiveShadow position-y={6}>
                 <meshStandardMaterial color={0xfff5e1} />
            </Cylinder>
            <pointLight castShadow intensity={20} distance={15} decay={1} position-y={5.8} />
        </group>
    );
});


/*
* =================================================================
* KitchenCounter.jsx
* FILE: src/components/models/KitchenCounter.jsx
* =================================================================
*/
import React from 'react';
import { Box } from '@react-three/drei';

export const KitchenCounter = React.forwardRef((props, ref) => {
    return (
        <group {...props} ref={ref} name="kitchen_counter">
            <Box args={[8, 3, 2.5]} castShadow receiveShadow position={[0, 1.5, 0]}>
                <meshStandardMaterial color={0xe0e0e0} />
            </Box>
            <Box args={[8, 0.2, 2.6]} castShadow receiveShadow position={[0, 3.1, 0]}>
                <meshStandardMaterial color={0x424242} />
            </Box>
        </group>
    );
});


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


/*
* =================================================================
* LargeRug.jsx
* FILE: src/components/models/LargeRug.jsx
* =================================================================
*/
import React from 'react';
import * as THREE from 'three';
import { Plane } from '@react-three/drei';

export const LargeRug = React.forwardRef((props, ref) => {
    return (
        <Plane {...props} ref={ref} name="large_rug" args={[16, 12]} rotation-x={-Math.PI / 2} position-y={0.05} receiveShadow>
             <meshStandardMaterial color={0x455a64} side={THREE.DoubleSide} />
        </Plane>
    );
});


/*
* =================================================================
* Mirror.jsx
* FILE: src/components/models/Mirror.jsx
* =================================================================
*/
import React from 'react';
import { Box } from '@react-three/drei';

export const Mirror = React.forwardRef((props, ref) => {
    return (
        <group {...props} ref={ref} name="mirror" position-y={5}>
            <Box args={[3, 4, 0.2]} castShadow receiveShadow>
                <meshStandardMaterial color={0x757575} />
            </Box>
            <Box args={[2.8, 3.8, 0.1]} position-z={0.1}>
                 <meshStandardMaterial color={0xeeeeee} roughness={0} metalness={0.9} />
            </Box>
        </group>
    );
});


/*
* =================================================================
* Nightstand.jsx
* FILE: src/components/models/Nightstand.jsx
* =================================================================
*/
import React from 'react';
import { Box, Cylinder } from '@react-three/drei';

export const Nightstand = React.forwardRef((props, ref) => {
    return (
        <group {...props} ref={ref} name="nightstand">
            {/* Main Body */}
            <Box args={[2, 2, 1.5]} castShadow receiveShadow position={[0, 1, 0]}>
                <meshStandardMaterial color={0x8d6e63} />
            </Box>
            {/* Top Surface */}
            <Box args={[2.1, 0.2, 1.6]} castShadow receiveShadow position={[0, 2.1, 0]}>
                 <meshStandardMaterial color={0x795548} />
            </Box>
            {/* Drawer Front */}
            <Box args={[1.8, 0.8, 0.1]} castShadow receiveShadow position={[0, 1.4, 0.7]}>
                <meshStandardMaterial color={0x9d7f72} />
            </Box>
             {/* Handle */}
            <Cylinder args={[0.1, 0.1, 0.2, 12]} castShadow receiveShadow rotation-x={Math.PI / 2} position={[0, 1.4, 0.8]}>
                <meshStandardMaterial color={0x504030} />
            </Cylinder>
        </group>
    );
});


/*
* =================================================================
* OfficeChair.jsx
* FILE: src/components/models/OfficeChair.jsx
* =================================================================
*/
import React from 'react';
import { Box, Cylinder } from '@react-three/drei';

export const OfficeChair = React.forwardRef((props, ref) => {
    return (
        <group {...props} ref={ref} name="office_chair">
            <Cylinder args={[0.2, 0.2, 1.5, 16]} castShadow receiveShadow position={[0, 0.75, 0]}>
                <meshStandardMaterial color={0x212121} />
            </Cylinder>
            <Box args={[1.8, 0.4, 1.8]} castShadow receiveShadow position={[0, 1.5, 0]}>
                 <meshStandardMaterial color={0x424242} />
            </Box>
            <Box args={[1.8, 2.2, 0.3]} castShadow receiveShadow position={[0, 2.8, -0.75]}>
                 <meshStandardMaterial color={0x424242} />
            </Box>
            {[...Array(5)].map((_, i) => (
                <Cylinder key={i} args={[0.1, 0.1, 1.2, 8]} castShadow receiveShadow rotation-z={Math.PI / 4} rotation-y={i * (Math.PI * 2 / 5)} position={[0, 0.5, 0]}>
                    <meshStandardMaterial color={0x212121} />
                </Cylinder>
            ))}
        </group>
    );
});


/*
* =================================================================
* Painting.jsx
* FILE: src/components/models/Painting.jsx
* =================================================================
*/
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


/*
* =================================================================
* Plant.jsx
* FILE: src/components/models/Plant.jsx
* =================================================================
*/
import React from 'react';
import { Cylinder } from '@react-three/drei';

export const Plant = React.forwardRef((props, ref) => {
    return (
        <group {...props} ref={ref} name="plant">
            <Cylinder args={[1, 1.2, 1.5, 32]} castShadow receiveShadow position={[0, 0.75, 0]}>
                <meshStandardMaterial color={0x8d6e63} />
            </Cylinder>
            <Cylinder args={[0.1, 1.5, 3, 32]} castShadow receiveShadow position={[0, 2.25, 0]}>
                 <meshStandardMaterial color={0x4caf50} />
            </Cylinder>
        </group>
    );
});


/*
* =================================================================
* Refrigerator.jsx
* FILE: src/components/models/Refrigerator.jsx
* =================================================================
*/
import React from 'react';
import { Box } from '@react-three/drei';

export const Refrigerator = React.forwardRef((props, ref) => {
    return (
        <group {...props} ref={ref} name="refrigerator" position-y={3.5}>
            <Box args={[3.5, 7, 3]} castShadow receiveShadow>
                <meshStandardMaterial color={0xe0e0e0} />
            </Box>
            <Box args={[0.2, 3, 0.2]} castShadow receiveShadow position={[1.8, 1.5, 1.5]}>
                <meshStandardMaterial color={0x757575} />
            </Box>
        </group>
    );
});


/*
* =================================================================
* Rug.jsx
* FILE: src/components/models/Rug.jsx
* =================================================================
*/
import React from 'react';
import * as THREE from 'three';
import { Plane } from '@react-three/drei';

export const Rug = React.forwardRef((props, ref) => {
    return (
        <Plane {...props} ref={ref} name="rug" args={[10, 6]} rotation-x={-Math.PI / 2} position-y={0.05} receiveShadow>
             <meshStandardMaterial color={0xb71c1c} side={THREE.DoubleSide} />
        </Plane>
    );
});


/*
* =================================================================
* SectionalCouch.jsx
* FILE: src/components/models/SectionalCouch.jsx
* =================================================================
*/
import React from 'react';
import { Couch } from './Couch';

export const SectionalCouch = React.forwardRef((props, ref) => {
    return (
        <group {...props} ref={ref} name="sectional_couch">
            <Couch />
            <Couch scale={[1,1,1.5]} position={[8.8, 0, 2.5]} />
        </group>
    )
});


/*
* =================================================================
* Stairs.jsx
* FILE: src/components/models/Stairs.jsx
* =================================================================
*/
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


/*
* =================================================================
* Stove.jsx
* FILE: src/components/models/Stove.jsx
* =================================================================
*/
import React from 'react';
import { Box, Cylinder } from '@react-three/drei';

export const Stove = React.forwardRef((props, ref) => {
    return (
        <group {...props} ref={ref} name="stove">
             <Box args={[3, 3, 2.5]} castShadow receiveShadow position={[0, 1.5, 0]}>
                <meshStandardMaterial color={0x607d8b} />
            </Box>
             <Box args={[3, 2.5, 2.5]} castShadow receiveShadow position={[0, 4.25, 0]}>
                <meshStandardMaterial color={0x37474f} />
            </Box>
             {[...Array(4)].map((_, i) => (
                <Cylinder key={i} args={[0.4, 0.4, 0.1, 32]} castShadow receiveShadow position={[i < 2 ? -0.8 : 0.8, 3.05, i % 2 === 0 ? -0.7 : 0.7]}>
                     <meshStandardMaterial color={0x212121} />
                </Cylinder>
            ))}
        </group>
    );
});


/*
* =================================================================
* TableLamp.jsx
* FILE: src/components/models/TableLamp.jsx
* =================================================================
*/
import React from 'react';
import { Cylinder } from '@react-three/drei';

export const TableLamp = React.forwardRef((props, ref) => {
    return (
        <group {...props} ref={ref} name="table_lamp">
            <Cylinder args={[0.5, 0.5, 0.1, 32]} castShadow receiveShadow position-y={0.05}>
                <meshStandardMaterial color={0x90a4ae} />
            </Cylinder>
            <Cylinder args={[0.1, 0.1, 1, 32]} castShadow receiveShadow position-y={0.6}>
                 <meshStandardMaterial color={0x90a4ae} />
            </Cylinder>
             <Cylinder args={[0.4, 0.6, 0.7, 32]} castShadow receiveShadow position-y={1.4}>
                <meshStandardMaterial color={0xececec} />
            </Cylinder>
            <pointLight castShadow intensity={5} distance={8} decay={1} position-y={1.3} />
        </group>
    );
});


/*
* =================================================================
* TallPlant.jsx
* FILE: src/components/models/TallPlant.jsx
* =================================================================
*/
import React from 'react';
import { Cylinder } from '@react-three/drei';

export const TallPlant = React.forwardRef((props, ref) => {
    return (
        <group {...props} ref={ref} name="tall_plant">
            <Cylinder args={[1.2, 1.5, 3, 32]} castShadow receiveShadow position={[0, 1.5, 0]}>
                <meshStandardMaterial color={0x795548} />
            </Cylinder>
            <Cylinder args={[0.2, 2.5, 5, 32]} castShadow receiveShadow position={[0, 5, 0]}>
                <meshStandardMaterial color={0x66bb6a} />
            </Cylinder>
        </group>
    );
});


/*
* =================================================================
* Toilet.jsx
* FILE: src/components/models/Toilet.jsx
* =================================================================
*/
import React from 'react';
import { Box } from '@react-three/drei';

export const Toilet = React.forwardRef((props, ref) => {
    return (
        <group {...props} ref={ref} name="toilet">
            <Box args={[1.5, 1, 2]} castShadow receiveShadow position={[0, 0.5, 0]}>
                <meshStandardMaterial color={0xffffff} />
            </Box>
            <Box args={[1.5, 1.5, 0.8]} castShadow receiveShadow position={[0, 1.75, -0.6]}>
                 <meshStandardMaterial color={0xffffff} />
            </Box>
        </group>
    );
});


/*
* =================================================================
* TvStand.jsx
* FILE: src/components/models/TvStand.jsx
* =================================================================
*/
import React from 'react';
import { Box } from '@react-three/drei';

export const TvStand = React.forwardRef((props, ref) => {
    return (
        <group {...props} ref={ref} name="tv_stand">
            <Box args={[8, 0.5, 2]} castShadow receiveShadow position={[0, 1, 0]}>
                 <meshStandardMaterial color={0x3e2723} />
            </Box>
            <Box args={[8, 1, 2]} castShadow receiveShadow position={[0, 0.5, 0]}>
                 <meshStandardMaterial color={0x3e2723} />
            </Box>
             <group name="tv">
                <Box args={[6, 3.5, 0.2]} castShadow receiveShadow position={[0, 3.25, 0]}>
                    <meshStandardMaterial color={0x111111} />
                </Box>
                 <Box args={[2, 0.2, 0.5]} castShadow receiveShadow position={[0, 1.6, 0]}>
                    <meshStandardMaterial color={0x111111} />
                </Box>
            </group>
        </group>
    );
});


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


/*
* =================================================================
* Window.jsx
* FILE: src/components/models/Window.jsx
* =================================================================
*/
import React from 'react';
import { Box } from '@react-three/drei';

export const Window = React.forwardRef((props, ref) => {
    return (
        <group {...props} ref={ref} name="window" position-y={5}>
            <Box args={[5, 4, 0.4]} castShadow receiveShadow>
                <meshStandardMaterial color={0xeeebe8} />
            </Box>
            <Box args={[4.7, 3.7, 0.2]}>
                 <meshStandardMaterial color={0x81d4fa} transparent opacity={0.3} />
            </Box>
        </group>
    );
});
