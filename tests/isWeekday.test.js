

describe('isWeekday function', function(){

  it('should return the day of the week', function(){
    assert.equal(true, isWeekday('Monday'));
  });
  
  it('should return false if its not a day of the week', function(){
    assert.equal(false, isWeekday('Sunday'));
  });

});
