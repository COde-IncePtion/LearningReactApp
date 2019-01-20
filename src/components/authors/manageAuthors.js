var React = require('react');
var AddAuthorPage = require('./addAuthorPage');

var ManageAuthors = React.createClass({
        getInitialState: function () {
            return {
                author: {
                    id: '',
                    firstName: '',
                    lastName: ''
                }
            };
        },
        handleOnChange: function(event){
            let field = event.target.name;
            let value = event.target.value;
            this.state.author[field]=value;
            this.setState({author:this.state.author})
        },
        render: function () {
            return (
                <AddAuthorPage author={this.state.author} onChange={this.handleOnChange}/>
            );
        }
    }
);

module.exports = ManageAuthors;