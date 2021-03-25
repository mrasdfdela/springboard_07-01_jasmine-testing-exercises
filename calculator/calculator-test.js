
it('should calculate the monthly rate correctly', function () {
  values = {
    amount: 200,
    years: 1,
    rate: .01
  }

  expect(calculateMonthlyPayment(values)).toEqual('16.76');
});


it("should return a result with 2 decimal places", function() {
  values = {
    amount: 200,
    years: 1,
    rate: .01
  }

  monthlyPayment = calculateMonthlyPayment(values)
  decimalPlaces = monthlyPayment.split('.')[1].length
  expect(decimalPlaces).toEqual(2)
});

/// etc
