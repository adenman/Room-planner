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
