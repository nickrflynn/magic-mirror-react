import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

function Clock(props) {
    const date = new Date();
    const seconds = formatTwoDigitNumber(date.getSeconds());
    const minutes = formatTwoDigitNumber(date.getMinutes());
    const hours = formatHours(date.getHours());
    return (
        <div>
            <span id="hours-minutes">{hours}:{minutes}</span>
            <span id="seconds">{seconds}</span>
        </div>
    );
}

function formatHours(hours) {
    return hours > 12 ? hours - 12 : hours;
}

function formatTwoDigitNumber(num) {
    return ('0' + num).slice(-2);
}

function tick() {
    const element = <Clock />;
    ReactDOM.render(
        element,
        document.getElementById('clock')
    );
}

setInterval(tick, 1000);



ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
