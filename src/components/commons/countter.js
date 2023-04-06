import React, { useEffect, useState, useRef } from 'react';

function Counter() {
    const [count, setCount] = useState(0);
    const prevCount = useRef(count);

    useEffect(() => {
        prevCount.current = count;
    }, [count]);

    const handleIncreaseCounter = () => {
        setCount(x => x + 1)
    }

    return (
        <div>
            <p>Prev : {prevCount.current}</p>
            <p>Current : {count}</p>

            <div>
                <button
                    onClick={handleIncreaseCounter}
                >Count</button>
            </div>
        </div>
    );
}

export default Counter;