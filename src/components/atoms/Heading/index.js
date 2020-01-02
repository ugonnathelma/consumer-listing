import React from "react";
import PropTypes from "prop-types";

import { Text, Wrap } from "./styles";

const Heading = ({ text, size, primary, padding, showRule, dataTestId }) => (
  <Wrap padding={padding} data-test-id={dataTestId}>
    <Text size={size} primary={primary}>
      {text}
    </Text>
    {showRule && <hr />}
  </Wrap>
);
export default Heading;

Heading.propTypes = {
  text: PropTypes.string,
  size: PropTypes.string,
  primary: PropTypes.bool,
  padding: PropTypes.string,
  showRule: PropTypes.bool,
  dataTestId: PropTypes.string
};
