function formatValue(value: number) {
  const BRL = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });

  return BRL.format(value);
}

export function formatToCurrency(priceInString: string | undefined) {
  if (priceInString) {
    const valueInNumber = parseFloat(priceInString);

    return formatValue(valueInNumber);
  } else {
    return 0;
  }
}
