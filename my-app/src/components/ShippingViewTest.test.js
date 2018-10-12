import React from "react";
import { shallow } from "enzyme";

import ShippingView from "./ShippingView";

describe("ShippingView", () => {
  it('should render correctly in "debug" mode', () => {
    const component = shallow(<ShippingView debug />);

    expect(component).toMatchSnapshot();
  });
});
