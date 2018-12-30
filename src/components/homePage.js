"use strict";
var React = require('react');

var HomePage = React.createClass({
    render: function () {
        return (
            <div className={'jumbotron'}>
                <h1>Hi From React Component</h1>
            </div>
        );
    }
});

module.exports = HomePage;

