import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

Clock.propTypes = {};

function formatDate(date) {
    if (!date) return '';
    const hours = `0${date.getHours()}`.slice(-2);
    const minutes = `0${date.getMinutes()}`.slice(-2);
    const seconds = `0${date.getSeconds()}`.slice(-2);
    return `${hours}:${minutes}:${seconds}`;
}

function Clock() {
    const [timeString, setTimeString] = useState("");

    useEffect(() => {
        const id = setInterval(() => {
            const now = new Date();
            setTimeString(formatDate(now))
        }, 1000);

        return () => {
            clearInterval(id);
        }

    }, []);

    return (
        <div>{timeString}</div>
    );
}

export default Clock;