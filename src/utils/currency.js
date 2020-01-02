const currencyValidators = {
  "de-DE": value => {
    const normalized = value.replace(/\./g, "").replace(/,/g, ".");
    const [wholeNumber, decimalParts] = value.split(",");
    const decimalMatches = value.match(/,/g);
    const containsOneDecimalIndicator =
      !decimalMatches || decimalMatches.length <= 1;
    const containsDotsAfterDecimal = () => decimalParts.includes(".");
    const containsConsecutiveSeparators = () => value.match(/([.,]{2})/);
    const isWholeNumberValidNumber = !isNaN(wholeNumber);
    const isDecimalValidNumber = !decimalParts || !isNaN(decimalParts);

    // allow empty string
    if (
      value === "" ||
      (containsOneDecimalIndicator &&
        isWholeNumberValidNumber &&
        isDecimalValidNumber)
    ) {
      return !containsConsecutiveSeparators() &&
        (!decimalParts || !containsDotsAfterDecimal())
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
