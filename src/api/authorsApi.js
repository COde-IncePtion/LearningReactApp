"use strict";

var AuthorAPi = {
    getAuthors : function () {
        return [
            {
                'id': '100',
                'firstName': 'Ashish Rawat'
            },
            {
                'id': '101',
                'firstName': 'Abdul Sohail'
            }
        ];
    }
};

module.exports = AuthorAPi;
