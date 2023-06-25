const currencyEl_one=document.getElementById('currency-one');
const currencyEl_two=document.getElementById('currency-two');
const amtEl_one=document.getElementById('amount-one');
const amtEl_two=document.getElementById('amount-two');

const rateEl= document.getElementById('rate');
const swap = document.getElementById('swap');

//fetech currency rate and update the document object model
function calculate() {
    const currency_one = currencyEl_one.value;
    const currency_two = currencyEl_two.value;

    fetch(`https://v6.exchangerate-api.com/v6/66b9bc47ece29d4b90014d1c/latest/${currency_one}`)
        .then((res) => res.json())
        .then((data) =>{
         console.log(data);
         const rate = data.conversion_rates[currency_two];
         rateEl.innerText = `1 ${currency_one} = ${rate} ${currency_two}`;

         amtEl_two.value = (amtEl_one.value * rate).toFixed(2);

        });
}

currencyEl_one.addEventListener('change',calculate);
currencyEl_two.addEventListener('change',calculate);
amtEl_one.addEventListener('input',calculate);
amtEl_two.addEventListener('input',calculate);

swap.addEventListener('click', () =>{
    const temp=currencyEl_one.value;
    currencyEl_one.value=currencyEl_two.value;
    currencyEl_two.value=temp;
    calculate();
});
 
calculate();
