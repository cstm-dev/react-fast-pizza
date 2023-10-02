function formatCurrency(value) {
  return new Intl.NumberFormat("en", {
    style: "currency",
    currency: "EUR",
  }).format(value);
}

function formatDate(dateStr) {
  return new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "short",
    hour: "2-digit",
    minute: "2-digit",
  }).format(new Date(dateStr));
}

function calcMinutesLeft(dateStr) {
  const now = new Date().getTime();
  const setTime = new Date(dateStr).getTime();

  return Math.round((setTime - now) / 60000);
}

// https://uibakery.io/regex-library/phone-number
function isValidPhone(str) {
  return /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
    str
  );
}

export { calcMinutesLeft, formatCurrency, formatDate, isValidPhone };
