import React, { useState } from 'react';
import './Switch.css';

export function Switch() {
    const [isOn, setIsOn] = useState(false);

    const toggleSwitch = () => {
        setIsOn(!isOn);
    };

    return (
        <div className="switch" onClick={toggleSwitch}>
            <img
                src={isOn ? '/assets/dark-switch.svg' : '/assets/light-switch.svg'}
                alt={isOn ? 'Switch On' : 'Switch Off'}
            />
        </div>
    );
}
