"use strict";
var React = require("react");

var Header = React.createClass({
    render: function () {
        return (
            <div>
                <ul className="nav nav-pills">
                    <li role="presentation"><a href="#">Home</a></li>
                    <li role="presentation"><a href="#about">About</a></li>
                </ul>
            </div>
        );
    }
});

module.exports = Header;