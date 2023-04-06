import React, { useState } from 'react';

function getRandomColor() {
    const colors = ["red", "green", "blue", "grey"];
    const idx = Math.trunc(Math.random() * colors.length);
    return colors[idx];
}

function Colorbox() {
    const [color, setColor] = useState(() => {
        const initialColor = localStorage.getItem("box_color") || "deeppink"
        return initialColor;
    });

    function handleChangeColor() {
        const random = getRandomColor();
        setColor(random);
        localStorage.setItem("box_color", random)
    }

    return (
        <div
            style={{
                background: color
            }}
            onClick={() => handleChangeColor()}
        >
            hello
        </div>
    );
}

export default Colorbox;