import React, { useState, useEffect } from 'react';
import './LightDarkToggle.css';

const LightDarkToggle = () => {
    const [isLight, setIsLight] = useState(false);

    useEffect(() => {
        const root = document.getElementById('root'); // <html>
        root.classList.replace(
        isLight ? 'dark-mode' : 'light-mode',
        isLight ? 'light-mode' : 'dark-mode'
        );
    }, [isLight]);

    return (
        <>
        <input
            className="ld-toggle-checkbox"
            id="ld-toggle-new"
            checked={isLight}
            onChange={(e) => setIsLight(e.target.checked)}
            type="checkbox"
        />
        <label
            className="ld-toggle-label"
            htmlFor="ld-toggle-new"
        >
            <span className="ld-toggle-button" />
        </label>
        </>
    );
};

export default LightDarkToggle;