import React, {useRef, useState, useEffect} from 'react';
import moment from 'moment';
import './clock.css';

const Clock = () => {
    const [timerValues, setTimerValues] = useState({
        month: moment().format('MM'),
        day: moment().format('DD'),
        hours: moment().format('k'),
        minutes: moment().format('mm'),
        seconds: moment().format('ss'),
    });

    useEffect(() => {
        setInterval(() => {
            setTimerValues({
                month: moment().format('MM'),
                day: moment().format('DD'),
                hours: moment().format('k'),
                minutes: moment().format('mm'),
                seconds: moment().format('ss'),
            });
        });

    }, []); // Empty dependency array ensures useEffect runs only once on mount

    const style = {
        '--timer-month': `"${timerValues.month}"`,
        '--timer-day': `"${timerValues.day}"`,
        '--timer-hours': `"${timerValues.hours}"`,
        '--timer-minutes': `"${timerValues.minutes}"`,
        '--timer-seconds': `"${timerValues.seconds}"`,
    };

    return (
        <div className="clock-container" style={style}>
            <div className="clock-col">
                <p className="clock-month clock-timer"></p>
                <p className="clock-label">Month</p>
            </div>
            <div className="clock-col">
                <p className="clock-day clock-timer"></p>
                <p className="clock-label">Day</p>
            </div>
            <div className="clock-col">
                <p className="clock-hours clock-timer"></p>
                <p className="clock-label">Hours</p>
            </div>
            <div className="clock-col">
                <p className="clock-minutes clock-timer"></p>
                <p className="clock-label">Minutes</p>
            </div>
            <div className="clock-col">
                <p className="clock-seconds clock-timer"></p>
                <p className="clock-label">Seconds</p>
            </div>
        </div>
    );
};

export default Clock;