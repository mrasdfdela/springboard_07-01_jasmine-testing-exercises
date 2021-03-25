describe("Helpers test (with setup and tear-down)", function () {
  beforeEach(function () {
    billAmtInput.value = 100;
    tipAmtInput.value = 20;
    submitPaymentInfo();

    billAmtInput.value = 200;
    tipAmtInput.value = 50;
    submitPaymentInfo();
  });

  it('should calculate totals correctly', function(){

    expect( Math.round(sumPaymentTotal('tipPercent')/2) ).toEqual(23);
    expect(sumPaymentTotal('billAmt')).toEqual(300);
    expect(sumPaymentTotal('tipAmt')).toEqual(70);
  });

  it('should calculate and round off tip %', function(){
    expect(calculateTipPercent(100,17.5)).toBe(18);
  });

  it('should add a single td to the shift summary table', function() {
    let newTr = document.createElement('tr');
    appendTd(newTr, 'test');
    expect(newTr.lastElementChild.innerText).toEqual('test');
  });

  afterEach(function(){
    serverId = 0;
    paymentId = 0;
    allPayments = {};
    updateSummary();

    allServers = {};
    updateServerTable();

    paymentRows = document.querySelectorAll('#paymentTable tbody');
    paymentRows.forEach(function (el) {
      el.innerHTML = '';
    });
  });
});
