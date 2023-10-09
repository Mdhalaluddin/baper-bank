// window amount -------------
document.getElementById('btn-withdraw').addEventListener('click', function () {
    const myWithdraw = document.getElementById('Withdraw-item')
    const newWithdrawString = myWithdraw.value;
    const newWithdraw = parseFloat(newWithdrawString);

    const totalWithdrawField = document.getElementById('withdraw-amount');
    const withdrawFieldString = totalWithdrawField.innerText;
    const withdrawField = parseFloat(withdrawFieldString);

    myWithdraw.value = '';

    if (newWithdraw > withdrawField) {
        alert('tomer baper atu taka nai')
        return;
    }

    const withdrawTotal = newWithdraw + withdrawField;
    totalWithdrawField.innerText = withdrawTotal;

    // ----------total withdraw - total deposit-------------
    const totalAmountElement = document.getElementById('total-amount');
    const totalAmountElementString = totalAmountElement.innerText;
    const totalElementAmount = parseFloat(totalAmountElementString);
    const avaregeTotalElementAmount = totalElementAmount - withdrawTotal;
    totalAmountElement.innerText = avaregeTotalElementAmount;




})