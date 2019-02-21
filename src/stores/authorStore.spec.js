import AuthorStore from "./authorStore";
import AuthorActionTypes from "../constants/actionTypes";

jest.mock("../Dispatcher/appDispatcher");

import AppDispatcher from "../Dispatcher/appDispatcher";

var action = {
    actionType: AuthorActionTypes.CREATE_AUTHOR,
    author: {
        id: "1212",
        firstName: "Ashish",
        lastName: "Rawat"
    }
};

it("should have zero author initially", () => {
   expect(AuthorStore.getAllAuthors().length).toBe(0);
});

it("should register with the store", () => {
    expect(AppDispatcher.register.mock.calls.length).toBe(1);
});

it("should add author", () => {
    let callback = AppDispatcher.register.mock.calls[0][0];
    callback(action);
    expect(AuthorStore.getAllAuthors().length).toBe(1);
});