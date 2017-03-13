var React = require('react');
var ReactDOM = require('react-dom');
var Clock = require('./components/App');

ReactDOM.render(
    <Clock UTCOffset={1} />,
    document.getElementById('app')
);