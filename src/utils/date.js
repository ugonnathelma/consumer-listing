export const getDate = (date, locale) =>
  new Date(date).toLocaleDateString(locale);
