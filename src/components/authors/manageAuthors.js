var React = require('react');
var AddAuthorPage = require('./addAuthorPage');
var AuthorApi = require('../../api/authorsApi');
var Router = require('react-router');

var Toastr = require('toastr');
Toastr.options.timeOut = 1000;


var ManageAuthors = React.createClass({
        mixins:[
            Router.Navigation
        ],
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
            this.setState({author:this.state.author});
        },

        handleOnSave : function(event){
            event.preventDefault(); // to stop default browser behaviour
            AuthorApi.addAuthor(this.state.author);
            Toastr.success('Author saved successfully');
            this.transitionTo('authors');
        },
        render: function () {
            return (
                <AddAuthorPage author={this.state.author} onChange={this.handleOnChange} onSave={this.handleOnSave}/>
            );
        }
    }
);

module.exports = ManageAuthors;