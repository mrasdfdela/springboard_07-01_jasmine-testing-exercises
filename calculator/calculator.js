window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  }
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
  loanAmount = document.getElementById('loan-amount');
  loanYears = document.getElementById('loan-years');
  loanRate = document.getElementById('loan-rate');

  loanAmount.value = 100;
  loanYears.value = 1;
  loanRate.value = .01;

  update()
}

// Get the current values from the UI
// Update the monthly payment
function update() {
    let values = getCurrentUIValues();
    monthlyPayment = calculateMonthlyPayment(values);
    updateMonthly(monthlyPayment);
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
  p = values['amount'];
  i = values['rate'] / 12;
  n = values['years'] * 12;

  return ((p * i) / (1 - Math.pow(1 + i, -n))).toFixed(2);
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
  const elMonthlyPayment = document.getElementById('monthly-payment');
  monthlyText = `$${monthly.toString()}`;
  elMonthlyPayment.innerText = monthlyText;
}
