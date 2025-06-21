import { useEffect, useRef, forwardRef } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { PointerLockControls } from '@react-three/drei';
import * as THREE from 'three';

const Player = forwardRef(({ isMenuOpen, onCameraReady }) => {
    const { scene } = useThree();
    const controlsRef = useRef();
    
    // When the controls are ready, pass the camera object up to the App component
    useEffect(() => {
        if (controlsRef.current) {
            onCameraReady(controlsRef.current.getObject());
        }
    }, [onCameraReady]);

    // This effect handles locking and unlocking the pointer
    useEffect(() => {
        const handleCanvasClick = () => {
            if (!isMenuOpen && controlsRef.current && !controlsRef.current.isLocked) {
                controlsRef.current.lock();
            }
        };

        const canvasEl = document.querySelector('canvas');
        if (canvasEl) {
            canvasEl.addEventListener('click', handleCanvasClick);
        }

        // If a menu is opened while the pointer is locked, unlock it
        if (isMenuOpen && controlsRef.current?.isLocked) {
            controlsRef.current.unlock();
        }

        return () => {
            if (canvasEl) {
                canvasEl.removeEventListener('click', handleCanvasClick);
            }
        };
    }, [isMenuOpen]);

    // --- Player Movement Logic (largely unchanged) ---
    const moveState = useRef({ forward: false, backward: false, left: false, right: false });

    useEffect(() => {
        const onKeyDown = (event) => {
            if (event.target.tagName === 'INPUT') return;
            switch (event.code) {
                case 'KeyW': case 'ArrowUp': moveState.current.forward = true; break;
                case 'KeyA': case 'ArrowLeft': moveState.current.left = true; break;
                case 'KeyS': case 'ArrowDown': moveState.current.backward = true; break;
                case 'KeyD': case 'ArrowRight': moveState.current.right = true; break;
            }
        };

        const onKeyUp = (event) => {
            switch (event.code) {
                case 'KeyW': case 'ArrowUp': moveState.current.forward = false; break;
                case 'KeyA': case 'ArrowLeft': moveState.current.left = false; break;
                case 'KeyS': case 'ArrowDown': moveState.current.backward = false; break;
                case 'KeyD': case 'ArrowRight': moveState.current.right = false; break;
            }
        };

        document.addEventListener('keydown', onKeyDown);
        document.addEventListener('keyup', onKeyUp);
        return () => {
            document.removeEventListener('keydown', onKeyDown);
            document.removeEventListener('keyup', onKeyUp);
        };
    }, []);

    const velocity = useRef(new THREE.Vector3());
    const direction = new THREE.Vector3();
    const downVector = new THREE.Vector3(0, -1, 0);
    const raycaster = new THREE.Raycaster();
    const playerHeight = 5;

    useFrame((_, delta) => {
        if (controlsRef.current && controlsRef.current.isLocked) {
            const playerPos = controlsRef.current.getObject().position;

            velocity.current.x -= velocity.current.x * 10.0 * delta;
            velocity.current.z -= velocity.current.z * 10.0 * delta;

            direction.z = Number(moveState.current.forward) - Number(moveState.current.backward);
            direction.x = Number(moveState.current.right) - Number(moveState.current.left);
            direction.normalize();

            const moveSpeed = 80.0;
            if (moveState.current.forward || moveState.current.backward) velocity.current.z -= direction.z * moveSpeed * delta;
            if (moveState.current.left || moveState.current.right) velocity.current.x -= direction.x * moveSpeed * delta;
            
            controlsRef.current.moveRight(-velocity.current.x * delta);
            controlsRef.current.moveForward(-velocity.current.z * delta);

            raycaster.set(playerPos, downVector);
            const intersects = raycaster.intersectObjects(scene.children, true);
            
            let targetY = playerPos.y - 30 * delta;

            if (intersects.length > 0) {
                const firstHit = intersects[0];
                if (firstHit.distance < playerHeight + 0.5) {
                    let ground = firstHit.object;
                    if (ground.name === 'stair_ramp') {
                        const stairs = ground.parent;
                        const stairsBB = new THREE.Box3().setFromObject(stairs);
                        const localPlayerPos = stairs.worldToLocal(playerPos.clone());
                        const alpha = THREE.MathUtils.clamp(localPlayerPos.z / (stairsBB.min.z - stairsBB.max.z), 0, 1);
                        const stairY = stairsBB.min.y + alpha * (stairsBB.max.y - stairsBB.min.y) + playerHeight;
                        targetY = Math.max(targetY, stairY);
                    } else {
                        targetY = firstHit.point.y + playerHeight;
                    }
                }
            }
            playerPos.y = THREE.MathUtils.lerp(playerPos.y, targetY, 0.2);
        }
    });

    return <PointerLockControls ref={controlsRef} />;
});

export default Player;