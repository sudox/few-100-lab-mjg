
function tipClick(e: Event) {
    const tipButtons = document.getElementsByName('tipB');
    const buttonClicked = e.srcElement as HTMLInputElement;

    tipButtons.forEach((b: HTMLInputElement) => b.disabled = false);  // Enable all the tip buttons
    buttonClicked.disabled = true; // Disable the source click button

    document.getElementById('tipDialog').innerText = 'You are tipping ' + buttonClicked.innerText;
    document.getElementById('tipPercent').innerText = "Tip Percentage: " + buttonClicked.innerText;
    updateTotals();
    localStorage['tip'] = e.srcElement.id;
}

function updateTotals() {
    const billAmount = +document.getElementById('billAmount').innerText.match(/\d*\.?\d+/);
    const tipPercent = +document.getElementById('tipPercent').innerText.match(/\d*\.?\d+/);
    const tipAmount = +(tipPercent * .01 * billAmount);
    const totalPaid = +(billAmount + tipAmount);

    document.getElementById('tipAmount').innerText = 'Amount of tip: $' + tipAmount.toFixed(2);
    document.getElementById('totalPaid').innerText = "Total to be Paid: $" + totalPaid.toFixed(2);
}

export function runApp() {
    // Bill amount hook
    const totalBill = document.getElementById('totalBill') as HTMLInputElement;
    totalBill.addEventListener('keyup', () => {
        // Checks if the number input is malformed or negative
        if ((totalBill.value) == null || +(totalBill.value) < 0) {
            totalBill.classList.add('invalid');
            totalBill.value = '';
        }
        else {
            totalBill.classList.remove('invalid');
        }
        document.getElementById('billAmount').innerText = 'Bill Amount: $' + (+totalBill.value).toFixed(2);
        updateTotals();
    });

    // Tip button hooks
    document.getElementsByName('tipB').forEach(function (e) {
        e.addEventListener('click', tipClick);
    });

    // Web Storage for tip value retrieve
    if (localStorage['tip']) {
        document.getElementById(localStorage['tip']).click();
    }
}