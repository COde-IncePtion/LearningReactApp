"use strict";
var authors = [
    {
        'id': '100',
        'firstName': 'Ashish',
        'lastName': 'Rawat'
    },
    {
        'id': '101',
        'firstName': 'Abdul',
        'lastName': 'Sohail'
    }
];

var AuthorAPi = {
    getAuthors: function () {
        return authors;
    },

    addAuthor: function (author) {
        author.id = Math.floor(Math.random() * 10 - 1);
        authors.push(author);
    },

    saveAuthor: function (authorToSave) {
        var indexToUpdate = authors.findIndex(author => author.id == authorToSave.id);
        authors.splice(indexToUpdate, 1, authorToSave);
    },

    getAuthorById: function (id) {
        return authors.find(author => author.id == id);
    }

};

module.exports = AuthorAPi;
