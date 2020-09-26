const currencyElement_1 = document.getElementById("currency-one");
const amoutElement_1 = document.getElementById("amount-one");
const currencyElement_2 = document.getElementById("currency-two");
const amountElement_2 = document.getElementById("amount-two");

const rateElement = document.getElementById("rate");
const swap = document.getElementById("swap");

// Fetch Exchange Rate
function calculate() {
  const currency_one = currencyElement_1.value;
  const currency_two = currencyElement_2.value;

  fetch(`https://api.exchangerate-api.com/v4/latest/${currency_one}`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      const rate = data.rates[currency_two];

      rateElement.innerText = `1 ${currency_one}= ${rate} ${currency_two}`;
      amountElement_2.value = (amoutElement_1.value * rate).toFixed(2);
    });
}

// Event Listener
currencyElement_1.addEventListener("change", calculate);
amoutElement_1.addEventListener("input", calculate);
currencyElement_2.addEventListener("change", calculate);
amountElement_2.addEventListener("input", calculate);

swap.addEventListener("click", () => {
  const temp = currencyElement_1.value;
  currencyElement_1.value = currencyElement_2.value;
  currencyElement_2.value = temp;
  calculate();
});
calculate();
