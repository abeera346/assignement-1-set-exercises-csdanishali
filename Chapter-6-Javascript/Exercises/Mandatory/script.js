// Function to calculate the total petrol cost
function calculateTotal() {
  // Get the values from input fields
  const costPerLiter = parseFloat(document.getElementById('costPerLiter').value);
  const liters = parseFloat(document.getElementById('liters').value);

  // Calculate total cost
  const total = costPerLiter * liters;

  // Display the result, formatted to 2 decimal places
  document.getElementById('result').textContent = `Total: £${total.toFixed(2)}`;
}
