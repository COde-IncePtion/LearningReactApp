$ = jquery = require('jquery');
var React = require('react');
var HomePage = require('./components/homePage');
var About = require('./components/about/about');
var Authors = require('./components/authors/authorPage');
var Header = require('./components/common/header');

var App = React.createClass({
    render: function () {
        var Child;
        switch (this.props.route) {
            case 'about' :
                Child = About;
                break;
            case 'authors' :
                Child = Authors;
                break;
            default :
                Child = HomePage;
        }

        return (
            <div>
                <Header/>
                <Child/>
            </div>
        )
    }
});

function render() {
    var route = window.location.hash.substr(1);
    React.render(<App route={route}/>, document.getElementById('app'));
}

window.addEventListener('hashchange', render);
render();