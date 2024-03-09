function CurrencyFormat(value: number) {
  const usd = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
  });
  return `US${usd.format(value)}`;
}

export default CurrencyFormat;
