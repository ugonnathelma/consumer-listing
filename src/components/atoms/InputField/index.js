import React from "react";

import { InputField } from "./styles";

const TextField = props => {
  return <InputField {...props} data-test-id="input-field" />;
};

export default TextField;
