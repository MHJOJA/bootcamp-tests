function yearsAgo(year){
var todaysDate = new Date()
 var fullYear = todaysDate.getFullYear()
  var howManyYearsAgo = fullYear - year;
  return  howManyYearsAgo;
}

describe('yearsAgo function', function(){

  it('should return the exact year ago', function(){
      assert.equal(, yearsAgo('year'));
  });

});
