import React from 'react';
import './Notifications.css';
import { getLatestNotification } from './utils';
import closeIcon from './close-icon.jpg'

export function Notifications() {
const handleClick = () => {
    console.log('Close button has been clicked');
    };

    return (
    <div className="Notifications" style={{ position: 'relative', padding: '20px', border: '1px solid #ddd', backgroundColor: '#f9f9f9', margin: '10px', borderRadius: '5px' }}>
        <button
        aria-label="Close"
        onClick={handleClick}
        style={{
            position: 'absolute',
            top: '10px',
            right: '10px',
            background: 'none',
            border: 'none',
            cursor: 'pointer'
        }}
        >
        <img src={closeIcon} alt="Close icon" style={{ width: '20px', height: '20px' }} />
        </button>
        <p>Here is the list of notifications</p>
        <ul>
        <li data-priority="default">New course available</li>
        <li data-priority="urgent">New resume available</li>
        <li dangerouslySetInnerHTML={{ __html: getLatestNotification() }} />
        </ul>
    </div>
    );
}