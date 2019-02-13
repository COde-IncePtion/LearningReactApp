var Dispatcher = require('../Dispatcher/appDispatcher');
var AuthorApi = require('../api/authorsApi');
var ActionTypes = require('../constants/actionTypes');

var AuthorActions = {
    createAuthor: function (author) {
        let newAuthor = AuthorApi.addAuthor(author);

        Dispatcher.dispatch({
            actionType: ActionTypes.CREATE_AUTHOR,
            author: newAuthor
        });
    },

    updateAuthor : function (authorToUpdate) {
        let updatedAuthor = AuthorApi.updateAuthor(authorToUpdate);

        Dispatcher.dispatch({
            actionType: ActionTypes.UPDATE_AUTHOR,
            author: updatedAuthor
        });
    }
};

module.exports = AuthorActions;