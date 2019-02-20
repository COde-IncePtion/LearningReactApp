import React from "react";
import AuthorPage from "./authorPage";
import {shallow} from "enzyme";

it("should render authorPage component", () => {
    let component = shallow(<AuthorPage/>);
    expect(component.instance().state).toEqual({authors: []});
});

it("should component snapshot", () => {
    let component = shallow(<AuthorPage/>);

    expect(component).toMatchSnapshot();
});