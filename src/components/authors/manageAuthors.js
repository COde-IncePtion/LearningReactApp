var React = require('react');
var AddAuthorPage = require('./addAuthorPage');
var AuthorActions = require('../../actions/authorActions');
var AuthorStore = require('../../stores/authorStore');
var Router = require('react-router');

var Toastr = require('toastr');
Toastr.options.timeOut = 1000;


var ManageAuthors = React.createClass({
        mixins: [
            Router.Navigation
        ],

        getInitialState: function () {
            return {
                author: {
                    id: '',
                    firstName: '',
                    lastName: ''
                },
                errors: {}
            };
        },

        componentWillMount: function () {
            var authorId = this.props.params.id;
            if(authorId){
                this.setState({author: AuthorStore.getAuthorById(authorId)});
            }
        },

        handleOnChange: function (event) {
            let field = event.target.name;
            let value = event.target.value;
            this.state.author[field] = value;
            this.setState({author: this.state.author});
        },

        isAuthorFormValid: function () {
            var formValid = true;
            this.state.errors = {};
            if (this.state.author.firstName.length < 3) {
                this.state.errors.firstName = 'First name must be at least 3 characters';
                formValid = false;
            }

            if (this.state.author.lastName.length < 3) {
                this.state.errors.lastName = 'Last name must be at least 3 characters';
                formValid = false;
            }
            this.setState({errors: this.state.errors});
            return formValid;
        },

        handleOnSave: function (event) {
            event.preventDefault(); // to stop default browser behaviour

            if (!this.isAuthorFormValid())
                return;

            if(this.state.author.id)
                AuthorActions.updateAuthor(this.state.author);
            else
                AuthorActions.createAuthor(this.state.author);
            Toastr.success('Author saved successfully');
            this.transitionTo('authors');
        },

        render: function () {
            return (
                <AddAuthorPage
                    author={this.state.author}
                    onChange={this.handleOnChange}
                    onSave={this.handleOnSave}
                    errors={this.state.errors}/>
            );
        }
    }
);

module.exports = ManageAuthors;