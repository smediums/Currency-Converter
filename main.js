//Selectors
const currency1 = document.getElementById('currencyOne');
const currency2 = document.getElementById('currencyTwo');
const amount1 = document.getElementById('amountOne');
const amount2 = document.getElementById('amountTwo');
const exRate = document.getElementById('rate');
const swap = document.getElementById('swap');


//Functions
const calculate = () => {
    const curr1 = currency1.value;
    const curr2 = currency2.value;

    //Fetching API and Display
    fetch(`https://v6.exchangerate-api.com/v6/015d97c00a08c05623cb069d/latest/${curr1}`)
        .then((res) => res.json())
        .then((data) => {
            const rate = data.conversion_rates[curr2];
            exRate.innerText = `1 ${curr1} = ${rate} ${curr2}`;

            amount2.value = (amount1.value * rate).toFixed(2);
        });
}

calculate();

//EventListeners
currency1.addEventListener('change', calculate);
currency2.addEventListener('change', calculate);
amount1.addEventListener('input', calculate);
amount2.addEventListener('input', calculate);
swap.addEventListener('click', () => {
    const temp = currency1.value;
    currency1.value = currency2.value;
    currency2.value = temp;
    calculate();

})