
function tipClick(e: Event) {
    const tipButtons = document.getElementsByName('tipB');
    const buttonClicked = e.srcElement as HTMLInputElement;

    tipButtons.forEach((b: HTMLInputElement) => b.disabled = false);  // Enable all the tip buttons
    buttonClicked.disabled = true; //Disable the source click button

    const tipDialog = document.getElementById('tipDialog');
    tipDialog.innerText = 'You are tipping ' + buttonClicked.innerText;
}
function test() { }

export function runApp() {
    console.log('they see me running');

    // List items
    const billAmount = document.getElementById('billAmount');
    const tipPercent = document.getElementById('tipPercent');
    const tipAmount = document.getElementById('tipAmount');
    const totalPaid = document.getElementById('totalPaid');

    // Tip button hooks
    document.getElementsByName('tipB').forEach(function (e) {
        e.addEventListener('click', tipClick);
    });

    billAmount.innerHTML = 'Test1';
    tipPercent.innerHTML = 'Test2';
    tipAmount.innerHTML = 'Test3';
    totalPaid.innerHTML = 'Test4';
}