import React from "react";
import { render } from "react-testing-library";

import Home from "../home";

describe("Home", () => {
    it("renders correctly", () => {
        render(<Home />);
    });
});
