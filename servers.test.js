describe("Servers test", function() {
  beforeEach(function () {
    // initialization logic
    serverNameInput.value = 'Alice';
  });

  it('should add a new server to allServers on submitServerInfo()', function () {
    submitServerInfo();

    expect(Object.keys(allServers).length).toEqual(1);
    expect(allServers['server' + serverId].serverName).toEqual('Alice');
  });

  it ('should not add a server when the string is empty on submitServerInfo()', function(){
    serverNameInput.value = '';
    submitServerInfo();
    expect (Object.keys(allServers).length).toEqual(0);
  });

  it ('should update the table with the id of servertable on updateServerTable()', function(){
    submitServerInfo ();
    updateServerTable ();
    let table = document.querySelector("#serverTable tbody").querySelectorAll("tr, td");
    
    console.log (table)
    expect (table.length).toEqual(3);
    expect (table[0].id).toEqual("server1");
    expect (table[1].innerHTML).toEqual("Alice");
    expect (table[2].innerHTML).toEqual("$0.00");
    
  });
    
  afterEach(function() {
    allServers = {};
    serverId = 0;
    serverTbody.innerHTML = '';

  });
});
