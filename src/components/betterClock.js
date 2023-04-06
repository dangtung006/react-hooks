import React from 'react';
import useClock from './hooks/useClock';

function BetterClock() {
    const { timeString } = useClock();

    return (
        <div>
            <p>{timeString}</p>
        </div>
    );
}

export default BetterClock;