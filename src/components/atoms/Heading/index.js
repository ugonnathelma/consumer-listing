import React from "react";

import { Text, Wrap } from "./styles";

const Heading = ({ text, size, primary, padding, showRule }) => (
  <Wrap padding={padding}>
    <Text size={size} primary={primary}>
      {text}
    </Text>
    {showRule && <hr />}
  </Wrap>
);
export default Heading;
