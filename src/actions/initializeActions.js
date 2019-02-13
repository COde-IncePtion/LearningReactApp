var Dispatcher = require('../Dispatcher/appDispatcher');
var AuthorApi = require('../api/authorsApi');
var ActionTypes = require('../constants/actionTypes');


var InitializeActions = {

    initApp : function () {
        Dispatcher.dispatch({
            actionType :  ActionTypes.INITIALIZE_APP,
            authors : AuthorApi.getAuthors()
        });
    }
};

module.exports = InitializeActions;