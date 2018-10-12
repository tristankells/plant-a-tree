import React from "react";
import { shallow } from "enzyme";

import Backdrop from "./Backdrop";

describe("Backdrop", () => {
  it('should render correctly in "debug" mode', () => {
    const component = shallow(<Backdrop debug />);

    expect(component).toMatchSnapshot();
  });
});
