import React from "react";

import { ButtonBlock } from "./styles";

const Button = ({ children, ...props }) => (
  <ButtonBlock data-test-id="button" {...props}>
    {children}
  </ButtonBlock>
);
export default Button;
