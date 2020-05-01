
function totalGroceryBill(value){
    var costs = value.split(",");
  
    var total = 0;
  
  
    for(var i=0;  i<costs.length; i++){
    var bill = costs[i].trim();
  
      if(bill === "cereal"){
        total += 22.50;
      }
      else if(bill === "milk"){
       total += 12.50;
      }
      else if(bill === "chicken"){
        total += 32.70;
       }
       else if(bill === "eggs"){
        total += 12.50;
       }
      
    }
    console.log(total.toFixed(2))
    return "R" + total.toFixed(2);
  }
  
  
  
  describe('totalGroceryBill function', function(){
  
    it('should return the total value', function(){
      assert.equal('R0.00', totalPhoneBill('value'));
    });
  
  });
  