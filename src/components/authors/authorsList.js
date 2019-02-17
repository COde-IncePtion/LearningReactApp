var React = require("react");
var Link = require('react-router').Link;
var AuthorActions = require('../../actions/authorActions');
var Toastr = require('toastr');

var AuthorsList = React.createClass({
    propTypes: {
        authors: React.PropTypes.array.isRequired
    },

    deleteAuthor : function(id, event){
        event.preventDefault();
        AuthorActions.deleteAuthor(id);
        Toastr.success('Author deleted successfully');
    },

    render: function () {
        function createAuthorRow(author) {
            return (
                <tr key={author.id}>
                    <td><a href="#" onClick={this.deleteAuthor.bind(this, author.id)}>delete</a></td>
                    <td><Link to={'updateAuthor'} params={{id: author.id}}>{author.id}</Link></td>
                    <td>{author.firstName + ' ' + author.lastName}</td>
                </tr>
            );
        };

        return (
            <div>
                <table className='table'>
                    <thead>
                    <th></th>
                    <th>ID</th>
                    <th>Name</th>
                    </thead>
                    <tbody>
                    {this.props.authors.map(createAuthorRow, this)}
                    </tbody>
                </table>
            </div>
        );
    }
});

module.exports = AuthorsList;
