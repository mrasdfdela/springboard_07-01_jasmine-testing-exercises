describe("Servers test (with setup and tear-down)", function() {
  beforeEach(function () {
    // initialization logic
    serverNameInput.value = 'Alice';
  });

  it('should add a new server to allServers on submitServerInfo()', function () {
    submitServerInfo();

    expect(Object.keys(allServers).length).toEqual(1);
    expect(allServers['server' + serverId].serverName).toEqual('Alice');
  }); 

  it('should verify the number of servers listed', 
    function () {
      submitServerInfo();
      serverNames = document.querySelectorAll('#serverTable tbody tr');
      expect(Object.keys(allServers).length).toEqual(serverNames.length);
    })

  afterEach(function() {
    serverId = 0;
    paymentId = 0;
    allPayments = {};
    updateSummary();

    allServers = {};
    updateServerTable();

    summaryTds.forEach(function(el){
      el.innerHTML = '';
    });
  });
});
