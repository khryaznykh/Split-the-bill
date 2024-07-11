const calculateButton = document.querySelector("#calculateBtn");
calculateButton.addEventListener("click", calculateAmount);

const tipButton = document.querySelector("#addTip");
const tipOption = document.querySelector("#tipOptions");
tipButton.addEventListener("click", tipToChoose);

function tipToChoose(e) {
    e.preventDefault();
    tipOption.style.display = "block";
}

function calculateAmount(e) {
    e.preventDefault();
    const bill = document.querySelector("#billAmount").value;
    const people = document.querySelector("#people").value;
    const tip = tipOption.value;

    if (bill==="" || people==="" || people < 1) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Enter your information!',
        })
    }

    let billPerPerson = bill / people;
    let tipPerPerson = bill * tip / people;
    let totalPerPerson = billPerPerson + tipPerPerson;

    document.querySelector("#calculateBill").textContent = billPerPerson.toFixed(2);
    document.querySelector("#calculateTip").textContent = tipPerPerson.toFixed(2);
    document.querySelector("#calculateTotal").textContent = totalPerPerson.toFixed(2);
}



