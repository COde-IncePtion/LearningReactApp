"use strict";
var React = require("react");
var Link = require('react-router').Link;

var Header = React.createClass({
    render: function () {
        return (
            <div>
                <ul className="nav nav-pills">
                    <li role="presentation"><Link to="app">Home</Link></li>
                    <li role="presentation"><Link to="about">About</Link></li>
                    <li role="presentation"><Link to="authors">Authors</Link></li>
                </ul>
            </div>
        );
    }
});

module.exports = Header;