
function tipClick(e: Event) {
    const tipButtons = document.getElementsByName('tipB');
    const buttonClicked = e.srcElement as HTMLInputElement;

    tipButtons.forEach((b: HTMLInputElement) => b.disabled = false);  // Enable all the tip buttons
    buttonClicked.disabled = true; //Disable the source click button

    const tipDialog = document.getElementById('tipDialog');
    tipDialog.innerText = 'You are tipping ' + buttonClicked.innerText;

    // Update list table
    const bill = +document.getElementById('billAmount').innerText;
    let tipAmount = bill * (+buttonClicked.innerText);
    tipAmount = !!tipAmount ? tipAmount : 0.0;
    document.getElementById('tipPercent').innerText = 'Tip Percentage: ' + buttonClicked.innerText;
    document.getElementById('tipAmount').innerText = 'Amount of tip: $' + tipAmount;

}

function billChange() {

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