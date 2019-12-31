import React, { useState } from "react";

import InputField from ".";
import { getCurrency, normalizeCurrency } from "../../../utils";
import { DEFAULT_LOCALE } from "../../../config";

const CurrencyField = ({ onValueChange, value, lang, ...props }) => {
  const [initialValue, setValue] = useState(value);
  console.log({ value, initialValue });

  const handleChange = event => {
    const inputValue = event.target.value;
    const normalizedValue = normalizeCurrency(inputValue, lang);

    if (normalizedValue !== undefined) {
      onValueChange(normalizedValue);
      setValue(inputValue);
    }
  };

  return (
    <InputField
      {...props}
      lang={lang}
      value={getCurrency(initialValue, DEFAULT_LOCALE)}
      onChange={handleChange}
    />
  );
};

export default CurrencyField;
