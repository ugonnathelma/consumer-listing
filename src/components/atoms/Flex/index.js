import React from "react";
import PropTypes from "prop-types";

import { Wrap } from "./styles";

const Flex = ({ children, cellWidths, minWidth }) => (
  <Wrap cellWidths={cellWidths} minWidth={minWidth}>
    {children}
  </Wrap>
);
export default Flex;

Flex.propTypes = {
  cellWidths: PropTypes.arrayOf(PropTypes.number),
  minWidth: PropTypes.string
};
