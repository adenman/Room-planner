import React, { useState, useEffect, useCallback } from 'react';
import * as THREE from 'three';
import Scene from './components/Scene';
import FurnitureLibrary from './components/FurnitureLibrary';
import RoomsMenu from './components/RoomsMenu';
import './index.css';

// Using a consistent key for localStorage is good practice.
const LOCAL_STORAGE_KEY = '3dRoomPlannerSaves_v1';

export default function App() {
    // UI State
    const [isLibraryOpen, setLibraryOpen] = useState(false);
    const [isRoomsMenuOpen, setRoomsMenuOpen] = useState(false);
    
    // Data State
    const [furniture, setFurniture] = useState([]);
    const [savedRooms, setSavedRooms] = useState({});
    
    // This will hold the camera object from the 3D scene once it's ready.
    const [camera, setCamera] = useState(null);
    
    const isMenuOpen = isLibraryOpen || isRoomsMenuOpen;

    // Load saved rooms from localStorage on the initial render.
    useEffect(() => {
        try {
            const rooms = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || {};
            setSavedRooms(rooms);
        } catch (e) {
            console.error("Failed to load rooms from localStorage:", e);
            localStorage.removeItem(LOCAL_STORAGE_KEY); // Clear corrupted data
        }
    }, []);

    const handleAddItem = useCallback((itemType) => {
        if (!camera) {
            console.warn("Camera is not yet available to determine spawn position.");
            return;
        }
        
        const forwardVector = new THREE.Vector3();
        camera.getWorldDirection(forwardVector);
        const spawnPos = new THREE.Vector3().copy(camera.position).add(forwardVector.multiplyScalar(15));
        
        const newItem = {
            id: Date.now(),
            type: itemType,
            position: [spawnPos.x, 0.5, spawnPos.z], // Default Y position on the ground
            rotation: [0, 0, 0],
            scale: [1, 1, 1],
        };
        setFurniture(prev => [...prev, newItem]);
    }, [camera]); // This function depends on the camera object.

    const handleSaveRoom = (name) => {
        if (!name.trim()) return alert("Please enter a name for the room.");
        const newSavedRooms = { ...savedRooms, [name]: { furniture } };
        setSavedRooms(newSavedRooms);
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newSavedRooms));
    };

    const handleLoadRoom = (name) => {
        if (savedRooms[name]) {
            setFurniture(savedRooms[name].furniture || []);
        }
    };
    
    const handleDeleteRoom = (name) => {
        if (window.confirm(`Are you sure you want to delete "${name}"?`)) {
            const { [name]: _, ...remainingRooms } = savedRooms;
            setSavedRooms(remainingRooms);
            localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(remainingRooms));
        }
    };

    const handleNewRoom = () => {
        if (window.confirm('Are you sure you want to start a new room? All unsaved changes will be lost.')) {
            setFurniture([]);
        }
    };

    // Effect for handling keyboard shortcuts to open menus.
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.target.tagName === 'INPUT') return; // Don't interfere with typing
            if (e.code === 'Tab') {
                e.preventDefault();
                setLibraryOpen(prev => !prev);
                if (!isLibraryOpen) setRoomsMenuOpen(false); // Close other menu
            }
            if (e.code === 'KeyM') {
                e.preventDefault();
                setRoomsMenuOpen(prev => !prev);
                if (!isRoomsMenuOpen) setLibraryOpen(false); // Close other menu
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [isLibraryOpen, isRoomsMenuOpen]);

    return (
        <>
            <div id="instructions">
                <b>WASD:</b> Move | <b>Click/Drag:</b> Move Items | <b>R:</b> Rotate | <b>Q/E:</b> Up/Down | <b>Scroll:</b> Scale | <b>Backspace:</b> Delete | <b>Tab:</b> Library | <b>M:</b> Rooms | <b>ESC:</b> Release Mouse
            </div>
            
            {isLibraryOpen && <FurnitureLibrary onAddItem={handleAddItem} />}
            {isRoomsMenuOpen && (
                <RoomsMenu 
                    onSave={handleSaveRoom}
                    onLoad={handleLoadRoom}
                    onDelete={handleDeleteRoom}
                    onNew={handleNewRoom}
                    rooms={savedRooms}
                />
            )}

            <Scene 
                furniture={furniture} 
                setFurniture={setFurniture} 
                isMenuOpen={isMenuOpen}
                setCamera={setCamera} // Pass the camera setter down to the scene
            />
        </>
    );
}