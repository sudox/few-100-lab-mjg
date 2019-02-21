
function tipClick(e: Event) {
    const tipButtons = document.getElementsByName('tipB');
    const buttonClicked = e.srcElement as HTMLInputElement;

    tipButtons.forEach((b: HTMLInputElement) => b.disabled = false);  // Enable all the tip buttons
    buttonClicked.disabled = true; // Disable the source click button

    document.getElementById('tipDialog').innerText = 'You are tipping ' + buttonClicked.innerText;
    document.getElementById('tipPercent').innerText = "Tip Percentage: " + buttonClicked.innerText;
    updateTotals();

}

function billChange() {
    const billEntered = document.getElementById('totalBill') as HTMLInputElement;
    document.getElementById('billAmount').innerText = "Bill Amount: $" + billEntered.value;
    updateTotals();
}

function updateTotals() {
    const billAmount = +document.getElementById('billAmount').innerText.replace(/^\D+/g, '');
    let tipPercent = document.getElementById('tipPercent').innerText.replace(/^\D+/g, '');
    tipPercent = tipPercent.substring(0, tipPercent.length - 1);
    console.log(billAmount, tipPercent);
    const tipAmount = +tipPercent * .01 * billAmount;
    const totalPaid = billAmount + tipAmount;

    document.getElementById('tipAmount').innerText = 'Amount of tip: $' + tipAmount;
    document.getElementById('totalPaid').innerText = "Total to be Paid: $" + totalPaid;
}

export function runApp() {

    // Bill amount hook
    const totalBill = document.getElementById('totalBill') as HTMLInputElement;
    totalBill.addEventListener('change', billChange);

    // Tip button hooks
    document.getElementsByName('tipB').forEach(function (e) {
        e.addEventListener('click', tipClick);
    });

    // billAmount.innerHTML = 'Test1';
    // tipPercent.innerHTML = 'Test2';
    // tipAmount.innerHTML = 'Test3';
    // totalPaid.innerHTML = 'Test4';
}