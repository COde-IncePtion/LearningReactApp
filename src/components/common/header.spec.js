import React from "react";
import {shallow} from "enzyme";
import Header from "./header";

it("should render header", () => {
    let component = shallow(<Header/>);

    expect(component).toMatchSnapshot();
});