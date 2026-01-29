export function formatCurrency(amount, currency) {
  const localeMap = {
    'SAR': 'ar-SA',
    'AED': 'ar-AE',
    'EGP': 'ar-EG',
  };

  const locale = localeMap[currency] || 'en-US';

  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currency,
  }).format(amount);
};