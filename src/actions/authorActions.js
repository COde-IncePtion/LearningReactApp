var Dispatcher = require('../Dispatcher/appDispatcher');
var AuthorApi = require('../api/authorsApi');
var ActionTypes = require('../constants/actionTypes');

var AuthorActions = {
    createAuthor: function (author) {
        var newAuthor = AuthorApi.addAuthor(author);

        Dispatcher.dispatch({
            type: ActionTypes.CREATE_AUTHOR,
            author: newAuthor
        });
    }
};