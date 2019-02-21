export function runApp() {
    console.log('they see me running');
    // Get list items
    const billAmount = document.getElementById('billAmount');
    const tipPercent = document.getElementById('tipPercent');
    const tipAmount = document.getElementById('tipAmount');
    const totalPaid = document.getElementById('totalPaid');
    const tipDialog = document.getElementById('tipDialog');

    tipDialog.innerText = "You are tipping 20%";

    billAmount.innerHTML = "Test1";
    tipPercent.innerHTML = "Test2";
    tipAmount.innerHTML = "Test3";
    totalPaid.innerHTML = "Test4";

}