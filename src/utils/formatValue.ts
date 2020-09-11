const formatValue = (value: number): string =>
  Intl.NumberFormat('pt-BR', {
    style: 'curren`cy',
    currency: 'BRL',
  }).format(value); // TODO

export default formatValue;
