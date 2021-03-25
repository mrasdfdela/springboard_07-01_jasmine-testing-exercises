describe("Payments test (with setup and tear-down)", function() {
  beforeEach(function() {
    billAmtInput.value = 100;
    tipAmtInput.value = 20;
    submitPaymentInfo();

    billAmtInput.value = 150;
    tipAmtInput.value = 35;
    submitPaymentInfo();
  });

  it('check the correct number of payments submitted', function () {
    expect(Object.keys(allPayments).length).toEqual(2);
  });

  it('check tips calculation of payments', function() {
    tipPercentages = [20, 23];

    let paymentList = Object.keys(allPayments);
    paymentList.forEach(function(el,idx){
      expect(allPayments[el].tipPercent).toEqual(tipPercentages[idx]);
    });
  });

  it('check that createCurPayment() calculates correctly', function() {
    billAmtInput.value = 100;
    tipAmtInput.value = 15;

    testPayment = createCurPayment();
    expect((testPayment).billAmt).toEqual('100');
    expect((testPayment).tipAmt).toEqual('15');
    expect((testPayment).tipPercent).toBe(15);
  });

  it('check that appendPaymentTable() creates new elements', function() {
    newPayment = {
      billAmt: "125",
      tipAmt: "25",
      tipPercent: 20
    };
    appendPaymentTable(newPayment);
    paymentRecords = document.querySelectorAll('#paymentTable tbody tr');
    expect(paymentRecords.length).toEqual(3);
  });

  it('check that summary calculates tip % correctly', function(){
    summaryRow = document.querySelector("#summaryTable tbody tr");
    pctCell = summaryRow.lastElementChild;
    expect(pctCell.innerText).toEqual('22%');
  });

  it('check that delete buttons were created', function(){
    paymentRows = document.querySelectorAll('#paymentTable tbody tr');
    paymentRows.forEach(function(row){
      expect(row.lastChild.innerText).toEqual('X')
    });
  });

  it('should remove payments on delete', function() {
    
  });

  afterEach(function() {
    paymentId = 0;
    allPayments = {};
    updateSummary();

    allServers = {};
    updateServerTable();

    paymentRows = document.querySelectorAll('#paymentTable tbody');
    paymentRows.forEach(function(el) {
      el.innerHTML = '';
    });
  });
});