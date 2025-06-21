import React from 'react';

export default function RoomsMenu({ onSave, onLoad, onDelete, onNew, rooms }) {
    const [roomName, setRoomName] = React.useState('');

    return (
        <div className="menu-panel right">
            <h2>My Rooms</h2>
            <div id="save-room-section">
                <input 
                    type="text" 
                    value={roomName}
                    onChange={(e) => setRoomName(e.target.value)}
                    placeholder="Enter Room Name" 
                />
                <button className="button" onClick={() => { onSave(roomName); setRoomName(''); }}>Save Current Room</button>
            </div>
            <hr style={{ borderColor: '#444', margin: '20px 0' }} />
            <div id="saved-rooms-list">
                {Object.keys(rooms).map(name => (
                    <div key={name} className="saved-room-item">
                        <span>{name}</span>
                        <div className="room-actions">
                            <button onClick={() => onLoad(name)}>Load</button>
                            <button onClick={() => onDelete(name)}>Delete</button>
                        </div>
                    </div>
                ))}
            </div>
            <hr style={{ borderColor: '#444', margin: '20px 0' }} />
            <button id="new-room-button" className="button secondary" style={{ marginTop: '10px' }} onClick={onNew}>
                New Room
            </button>
        </div>
    );
}