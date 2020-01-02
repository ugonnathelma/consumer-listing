import React from "react";

import { ButtonBlock } from "./styles";

const Button = ({ children, ...props }) => (
  <ButtonBlock data-test-id="button" {...props} type="button">
    {children}
  </ButtonBlock>
);
export default Button;
