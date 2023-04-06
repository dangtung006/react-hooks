import { useEffect, useState, useRef } from 'react';

function randomColor(currentColor) {
    const COLORS = ['red', 'green', 'yellow'];
    const currentIdx = COLORS.indexOf(currentColor);
    let newIdx = currentIdx;

    while (currentIdx === newIdx) {
        console.log("same");
        newIdx = Math.trunc(Math.random() * COLORS.length);
    }
    return COLORS[newIdx];
}

function useMagicColor() {
    const [color, setColor] = useState("transparent");
    const colorRef = useRef("transparent");

    useEffect(() => {
        const colorInterval = setInterval(() => {
            const newColor = randomColor(colorRef.current);
            setColor(newColor);
            colorRef.current = newColor;
        }, 1000)
        return () => {
            clearInterval(colorInterval);
        }
    }, []);

    return color;
}

export default useMagicColor;