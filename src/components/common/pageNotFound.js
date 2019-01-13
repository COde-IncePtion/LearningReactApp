var React = require('react');
var Link = require('react-router').Link;

var PageNotFound = React.createClass({
    render: function () {
        return (
            <div>
                <h1> Page Not Found 404 </h1>
                <p> <Link to='app'>Back to Home</Link> </p>
            </div>
        );
    }
});

module.exports = PageNotFound;