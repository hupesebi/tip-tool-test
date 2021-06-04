describe("helper test", function() {
    beforeEach(function () {
        billAmtInput.value = 10;
        tipAmtInput.value = 1;
        submitPaymentInfo();
    });
  
    it('should calculate total amount of billAmt, tipAmt and tipPercent of all payments on sumPaymentTotal()', function () {
        billAmtInput.value = 10;
        tipAmtInput.value = 1;
        submitPaymentInfo();
        expect(sumPaymentTotal('billAmt')).toEqual(20);
        expect(sumPaymentTotal('tipAmt')).toEqual(2);
        expect(sumPaymentTotal('tipPercent')).toEqual(20);

        billAmtInput.value = 10;
        tipAmtInput.value = 1;
        submitPaymentInfo();
        expect(sumPaymentTotal('billAmt')).toEqual(30);
        expect(sumPaymentTotal('tipAmt')).toEqual(3);
        expect(sumPaymentTotal('tipPercent')).toEqual(30);
        
    });

    it ('should calculate tip percentage on calculateTipPercent', function(){
        expect(calculateTipPercent(100,10)).toEqual(10);
    });

    it ('should create a new td with value and append to tr on append(tr,value)',function(){
        let tr = document.createElement('tr');
        appendTd(tr,'hello');
        expect(tr.innerText).toEqual('hello');
    })

    it ('should create delete td and append to tr element on deleteTd(tr,type)',function(){
        let tr = document.createElement('tr');
        deleteTd(tr);
        expect(tr.innerText).toEqual('X');
    })
  
   
      
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
  