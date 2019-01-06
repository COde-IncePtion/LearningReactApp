var React = require('react');
var AuthorApi = require('../../api/authorsApi');
var AuthorsList = require('./authorsList');

var AuthorPage = React.createClass({
        getInitialState: function () {
            return {
                authors: []
            };
        },
        componentWillMount: function () {
            this.setState({
                authors: AuthorApi.getAuthors()
            });
        },
        render: function () {
            return (
                <div>
                    <h1>Authors</h1>
                    <AuthorsList authors={this.state.authors}/>
                </div>
            );
        }
    }
);

module.exports = AuthorPage;

/*
    Notes
    1. This component is a controller view. A controller view is a smart component which sets the property of the child component.
    2. Here the AuthorPage component is making the API call and setting the props of the authorList(child component) which is a
       dumb component that is only defining the markup for the display.
 */

