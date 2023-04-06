import React from 'react';
import useMagicColor from '../hooks/useMagicColor';

function MagicBox() {
    const color = useMagicColor();
    console.log("color : ", color);
    return (
        <div
            className='magic-box'
            style={{ background: color }}
        >

        </div>
    );
}

export default MagicBox;