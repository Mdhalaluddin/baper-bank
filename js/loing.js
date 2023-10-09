<!DOCTYPE html>
<html>
<head>
  <title>Coupon Code Discount Example</title>
</head>
<body>

<label for="couponCode">Enter Coupon Code:</label>
<input type="text" id="couponCode">
<button id="applyCoupon" onclick="applyCoupon()">Apply Coupon</button>

<p>Total Amount: <span id="totalAmount">0</span> rupees</p>

<script>
function applyCoupon() {
  var couponCode = document.getElementById("couponCode").value;
  var totalAmountElement = document.getElementById("totalAmount");
  
  // Replace this with your actual logic to calculate total amount
  var totalAmount = calculateTotalAmount(); // Replace with your logic

  if (couponCode === "SPECIAL" && totalAmount > 200) {
    var discountedAmount = totalAmount * 0.2; // 20% discount
    totalAmount -= discountedAmount;
    totalAmountElement.textContent = totalAmount.toFixed(2) + " rupees";
    alert("Coupon applied! You got a 20% discount.");
  } else {
    totalAmountElement.textContent = totalAmount.toFixed(2) + " rupees";
    alert("Coupon not applicable.");
  }
}

function calculateTotalAmount() {
  // Replace this with your actual logic to calculate the total amount
  // For demonstration, let's assume the total amount is 250 rupees
  return 250;
}
</script>

</body>
</html>
