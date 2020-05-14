
function totalPhoneBill(value){
  var costs = value.split(",");

  var total = 0;


  for(var i=0;  i<costs.length; i++){
  var bill = costs[i].trim();

    if(bill === "call"){
      total += 2.75;
    }
    else if(bill === "sms"){
     total += 0.65;
    }

  }
  console.log(total.toFixed(2))
  return "R" + total.toFixed(2);
}


describe('totalPhoneBill function', function(){

  it("should return 'R2.75' for calls", function(){
    assert.equal('R2.75', totalPhoneBill('call'));
  });
  it("should return R0.65 for sms ", function(){
    assert.equal('R0.65', totalPhoneBill('sms'));
  });


});
