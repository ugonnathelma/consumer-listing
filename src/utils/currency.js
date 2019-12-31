const currencyValidators = {
  "de-DE": value => {
    const normalized = value.replace(/\./g, "").replace(/,/g, ".");
    const splitValue = value.split(",");
    const containsOneDecimalIndicator = splitValue.length <= 2;
    const containsDotsAfterDecimal = () => splitValue[1].split(".").length > 1;
    const containsConsecutiveDots = () => splitValue[0].split("..").length > 1;
    const isWholeNumberValidNumber = !isNaN(splitValue[0].replace(/\./g, ""));

    // allow empty string
    if (
      value === "" ||
      (containsOneDecimalIndicator && isWholeNumberValidNumber)
    ) {
      return !containsConsecutiveDots() &&
        (!splitValue[1] || !containsDotsAfterDecimal())
        ? normalized
        : undefined;
    }
    return;
  }
};

export const getCurrency = (amount, locale, currency) => {
  const options = currency
    ? { currency, style: "currency" }
    : { style: "decimal" };

  return amount.toLocaleString(locale, options);
};

export const normalizeCurrency = (value, lang) =>
  currencyValidators[lang](value);
