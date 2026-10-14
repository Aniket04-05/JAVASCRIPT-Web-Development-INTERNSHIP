const subtotal = Number(prompt("Enter the bill amount:", "100"));
const tipPercentage = Number(prompt("Enter the tip percentage:", "15"));

const calculatedTip = subtotal * (tipPercentage / 100);
const totalAmount = subtotal + calculatedTip;

console.log(`Subtotal: $${subtotal}
Tip Percentage: ${tipPercentage}%
Calculated Tip: $${calculatedTip.toFixed(2)}
Total Amount to Pay: $${totalAmount.toFixed(2)}`);