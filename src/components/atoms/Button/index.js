import React from "react";

import { ButtonBlock } from "./styles";

const Button = ({ children, ...props }) => (
  <ButtonBlock {...props}>{children}</ButtonBlock>
);
export default Button;
