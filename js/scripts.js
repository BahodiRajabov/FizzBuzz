var elInput = document.querySelector(".form__input");
var elForm = document.querySelector(".form");
var elResult = document.querySelector(".form__result");
elForm.addEventListener("submit", (e) => {
  e.preventDefault();
  if (elInput.value % 3 === 0) {
    elResult.textContent = "Fizz";
  }
  if (elInput.value % 5 === 0) {
    elResult.textContent = "Buzz";
  }
  if (elInput.value % 5 === 0 && elInput.value % 3 === 0) {
    elResult.textContent = "FizzBuzz";
  }
  if (elInput.value % 5 !== 0 && elInput.value % 3 !== 0) {
    elResult.textContent = elInput.value;
  }
});
