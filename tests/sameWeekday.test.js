
function sameWeekday(day){
  if(day.startsWith('S')){
  return false
  }else {
  return true
  }
};

describe('sameWeekday function', function(){

  it('should return the day of the week', function(){
      assert.equal(true, sameWeekday('day'));
  });

});
