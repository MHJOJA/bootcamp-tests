
function isWeekday(day){
  if(day.startsWith('S')){
    return false;
  } else {
    return true;
  };
};

describe('isWeekday function', function(){

  it('should return the day of the week', function(){
    assert.equal(1, isWeekday('day'));
  });

});
