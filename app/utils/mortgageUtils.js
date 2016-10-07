export const calculateMonthlyPayment = (principal, rate, numberOfPayments) =>
  Math.round(principal * rate / (1 - (Math.pow(1 / (1 + rate), numberOfPayments)))); //eslint-disable-line

export const adjustForPropertyTax = (propertyValue, taxRate) => {
  let taxes = 0;
  if (taxRate >= 1) {
    taxes = taxRate;
  } else {
    taxes = propertyValue * taxRate;
  }
  return taxes;
};
