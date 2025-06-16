import React, { useState, useRef } from 'react';
import SceneCanvas from './components/SceneCanvas';
import FurnitureLibrary from './components/FurnitureLibrary.jsx';
import RoomsMenu from './components/RoomsMenu';

export default function App() {
  const [isLibraryOpen, setLibraryOpen] = useState(false);
  const [isRoomsMenuOpen, setRoomsMenuOpen] = useState(false);
  const sceneRef = useRef(); // This is a way to call functions on SceneCanvas

  // You would pass a function to FurnitureLibrary to add items
  const handleAddFurniture = (type) => {
    // This is a placeholder for a more robust state management solution
    // (like Zustand or passing a ref to SceneCanvas)
    console.log("Add:", type);
  };

  // Keyboard controls would be managed here
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.code === 'Tab') {
        e.preventDefault();
        setLibraryOpen(prev => !prev);
        setRoomsMenuOpen(false);
      }
      if (e.code === 'KeyM') {
        e.preventDefault();
        setRoomsMenuOpen(prev => !prev);
        setLibraryOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);


  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      {isLibraryOpen && <FurnitureLibrary onAdd={handleAddFurniture} />}
      {isRoomsMenuOpen && <RoomsMenu />}
      <SceneCanvas ref={sceneRef} />
    </div>
  );
}