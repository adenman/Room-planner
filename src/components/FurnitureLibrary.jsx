import React from 'react';

// This is the list of all available items.
const furnitureList = {
    "Living Room": ["Couch", "SectionalCouch", "Chair", "CoffeeTable", "EndTable", "TvStand", "Bookshelf", "Fireplace"],
    "Bedroom": ["KingBed", "Dresser", "Nightstand"],
    "Office": ["Desk", "OfficeChair", "FilingCabinet"],
    "Kitchen & Dining": ["DiningTable", "DiningChair", "KitchenCounter", "KitchenIsland", "Refrigerator", "Stove"],
    "Bathroom": ["Bathtub", "Toilet"],
    "Decor & Lighting": ["Rug", "LargeRug", "Plant", "TallPlant", "Painting", "Mirror", "FloorLamp", "TableLamp"],
    "Structural": ["Wall", "Door", "Window", "Stairs"]
};


export default function FurnitureLibrary({ onAddItem }) {
  return (
    <div className="menu-panel left">
      <h2>Furniture</h2>
      {Object.entries(furnitureList).map(([category, items]) => (
        <React.Fragment key={category}>
          <h3>{category}</h3>
          {items.map(item => (
            <div key={item} className="library-item" onClick={() => onAddItem(item)}>
              {/* Add spaces before capital letters for better readability */}
              {item.replace(/([A-Z])/g, ' $1').trim()}
            </div>
          ))}
        </React.Fragment>
      ))}
    </div>
  );
}