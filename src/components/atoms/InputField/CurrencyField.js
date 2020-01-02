import React, { useState } from "react";
import PropTypes from "prop-types";

import InputField from ".";
import { getCurrency, normalizeCurrency } from "../../../utils";
import { DEFAULT_LOCALE } from "../../../config";

const CurrencyField = ({
  onValueChange,
  value,
  lang = { DEFAULT_LOCALE },
  ...props
}) => {
  const [initialValue, setValue] = useState(value);

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

CurrencyField.propTypes = {
  onValueChange: PropTypes.func.isRequired,
  value: PropTypes.number,
  lang: PropTypes.string
};
