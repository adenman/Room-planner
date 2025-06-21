import React, { useState, useRef, useEffect, Suspense } from 'react';
import * as THREE from 'three';
import Scene from './components/Scene';
import FurnitureLibrary from './components/FurnitureLibrary';
import RoomsMenu from './components/RoomsMenu';
import './index.css';

export default function App() {
    const [isLibraryOpen, setLibraryOpen] = useState(false);
    const [isRoomsMenuOpen, setRoomsMenuOpen] = useState(false);
    const [savedRooms, setSavedRooms] = useState({});
    const [furniture, setFurniture] = useState([]);
    const [camera, setCamera] = useState(null);

    const isMenuOpen = isLibraryOpen || isRoomsMenuOpen;

    // Load saved rooms from localStorage on initial render
    useEffect(() => {
        try {
            const rooms = JSON.parse(localStorage.getItem('3dRoomPlannerSaves_v14')) || {};
            setSavedRooms(rooms);
        } catch (e) {
            console.error("Failed to load rooms:", e);
        }
    }, []);

    const handleAddItem = (itemType) => {
        if (!camera) return;
        
        const forwardVector = new THREE.Vector3();
        camera.getWorldDirection(forwardVector);
        const spawnPos = new THREE.Vector3().copy(camera.position).add(forwardVector.multiplyScalar(15));
        
        const newItem = {
            id: Date.now(),
            type: itemType,
            position: [spawnPos.x, 0.5, spawnPos.z],
            rotation: [0, 0, 0],
            scale: [1, 1, 1],
        };
        setFurniture(prev => [...prev, newItem]);
    };
    
    const handleSaveRoom = (name) => {
        if (!name) return alert("Please enter a name for the room.");
        const newSavedRooms = { ...savedRooms, [name]: { furniture } };
        setSavedRooms(newSavedRooms);
        localStorage.setItem('3dRoomPlannerSaves_v14', JSON.stringify(newSavedRooms));
    };

    const handleLoadRoom = (name) => {
        if(savedRooms[name]) {
            setFurniture(savedRooms[name].furniture || []);
        }
    };
    
    const handleDeleteRoom = (name) => {
        if (window.confirm(`Are you sure you want to delete "${name}"?`)) {
            const { [name]: _, ...remainingRooms } = savedRooms;
            setSavedRooms(remainingRooms);
            localStorage.setItem('3dRoomPlannerSaves_v14', JSON.stringify(remainingRooms));
        }
    };

    const handleNewRoom = () => setFurniture([]);

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.target.tagName === 'INPUT') return;
            if (e.code === 'Tab') {
                e.preventDefault();
                setLibraryOpen(prev => !prev);
                if (!isLibraryOpen) setRoomsMenuOpen(false);
            }
            if (e.code === 'KeyM') {
                e.preventDefault();
                setRoomsMenuOpen(prev => !prev);
                if (!isLibraryOpen) setLibraryOpen(false);
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
                setCamera={setCamera}
            />
        </>
    );
}