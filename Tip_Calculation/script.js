const bill_Amount = document.getElementById('bill')
const Tip_Percent = document.getElementById('bill_percent')
const btn = document.getElementById('calculate')
const total_Amount = document.getElementById('total')


function tipPercentage() {
    const foodAmount = bill_Amount.value
    const tipAmountInPercent = Tip_Percent.value
    const totalAmountOfFood = foodAmount * (1 + tipAmountInPercent / 100)

    total_Amount.innerText = `Total Bill: ${totalAmountOfFood.toFixed(2)} €`
    return totalAmountOfFood
}

document.getElementById("myForm").reset();
btn.addEventListener("click", tipPercentage)