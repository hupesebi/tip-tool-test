describe("Payment test", function() {
    beforeEach(function () {
      billAmtInput.value = 10;
      tipAmtInput.value = 1;
    });
  
    it('should add a new payment to allPayments on submitPaymentInfo()', function () {
      submitPaymentInfo();
  
      expect(Object.keys(allPayments).length).toEqual(1);
      expect(allPayments['payment1'].billAmt).toEqual('10');
      expect(allPayments['payment1'].tipAmt).toEqual('1');
      expect(allPayments['payment1'].tipPercent).toEqual(10);
    });
  
    it ('should not add a payment when the input is empty on submitPaymentInfo()', function(){
        billAmtInput.value = '';
        tipAmtInput.value = '';
      submitPaymentInfo();
      expect (Object.keys(allPayments).length).toEqual(0);
    });

    it ('should create a new payment on createCurPayment', function(){
        let payment = {
            billAmt: '10',
            tipAmt: '1',
            tipPercent: 10
        }
        expect (createCurPayment()).toEqual(payment);

    });

    it ('should not create a new payment when input is emptyon createCurPayment', function(){
        billAmtInput.value = '';
        tipAmtInput.value = '';
           
        expect (createCurPayment()).toEqual(undefined);

    });
  
    it ('should update the table with the id of paymentTable on appendPaymentTable()', function(){
      let currPayment = createCurPayment();
      allPayments['payment1'] = currPayment;

      appendPaymentTable(currPayment);
      let table = document.querySelector("#paymentTable tbody").querySelectorAll("tr, td");
      
      //console.log (table)
      expect (table.length).toEqual(4);
      expect (table[0].id).toEqual("payment0");
      expect (table[1].innerHTML).toEqual("$10");
      expect (table[2].innerHTML).toEqual("$1");
      expect (table[3].innerHTML).toEqual("10%");
      
    });

        it ('should update the table with the id of paymentTable on appendPaymentTable()', function(){
          submitPaymentInfo();
          expect (summaryTds[0].innerHTML).toEqual('$10');
          expect (summaryTds[1].innerHTML).toEqual('$1');
          expect (summaryTds[2].innerHTML).toEqual('10%');
          
        });
      
    afterEach(function() {
        billAmtInput.value = '';
        tipAmtInput.value = '';
        paymentTbody.innerHTML = '';
        summaryTds[0].innerHTML = '';
        summaryTds[1].innerHTML = '';
        summaryTds[2].innerHTML = '';
        serverTbody.innerHTML = '';
        paymentId = 0;
        allPayments = {};
      });
  });
  