import React from "react";

import { Wrap } from "./styles";

const Flex = ({ children, cellWidths, minWidth }) => (
  <Wrap cellWidths={cellWidths} minWidth={minWidth}>
    {children}
  </Wrap>
);
export default Flex;
