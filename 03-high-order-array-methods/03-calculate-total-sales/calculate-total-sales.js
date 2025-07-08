function calculateTotalSalesWithTax(products, taxRate) {
  const total = products.reduce(
    (sum, product) => (sum += product.price * product.quantity),
    0
  );
  return total + (total * taxRate) / 100;
}

module.exports = calculateTotalSalesWithTax;
