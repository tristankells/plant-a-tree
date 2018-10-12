import React from "react";
import { shallow } from "enzyme";

import ProfileMenu from "./ProfileMenu";

describe("ProfileMenu", () => {
  it('should render correctly in "debug" mode', () => {
    const component = shallow(<ProfileMenu debug />);

    expect(component).toMatchSnapshot();
  });
});
