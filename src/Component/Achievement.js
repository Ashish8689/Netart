import React from 'react';
import './style.css';

function Achievement() {
    return (
        <div className="achieve-container">
            <img className="trophy" src={`${process.env.PUBLIC_URL}/image/1.png`} alt="trophy"/>
        </div>
    )
}

export default Achievement
