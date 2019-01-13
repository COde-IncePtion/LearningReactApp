"use strict";
var React = require("react");

var About = React.createClass({
    
    statics : {
        willTransitionTo : function (transition, params, query, callback) {
            if (!confirm('Are you sure you want to navigate')) {
                transition.abort();
            }
            else
                callback();
        },
        willTransitionFrom : function (transition, component) {
            if (!confirm('Are you sure you want leave')) {
                transition.abort();
            }
        }
    },
    
    render: function () {
        return (
            <div>
                <h1> About </h1>
                <ul >
                    Tech stack for this Application
                    <li>React</li>
                    <li>React Router</li>
                    <li>Browserify</li>
                    <li>Gulp</li>
                    <li>Bootstrap</li>
                </ul>
            </div>
        );
    }
});

module.exports = About;