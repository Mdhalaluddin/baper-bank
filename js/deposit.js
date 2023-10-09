document.getElementById('btn-deposit').addEventListener('click', function () {
    const myDeposit = document.getElementById('deposit-item');
    const newDepositAmountString = myDeposit.value;
    const newDepositAmount = parseFloat(newDepositAmountString);

    const depositTotal = document.getElementById("total-deposit");
    const previousDepositAmountTotalString = depositTotal.innerText;

    const previousDepositAmountTotal = parseFloat(previousDepositAmountTotalString);
    const totalDeposit = newDepositAmount + previousDepositAmountTotal;
    depositTotal.innerText = totalDeposit;
    myDeposit.value = '';
    // ---------total amount + total Deposit---------
    const totalAmountField = document.getElementById('total-amount');
    const totalAmountString = totalAmountField.innerText;
    const totalAmount = parseFloat(totalAmountString);
    const avaregeTotalAmount = totalDeposit + totalAmount;
    totalAmountField.innerText = avaregeTotalAmount;
})
