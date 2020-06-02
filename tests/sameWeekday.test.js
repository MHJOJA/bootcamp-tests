
describe('sameWeekday function', function(){

  it('should return the day of the week', function(){
      assert.equal(false, sameWeekday('Monday'));
  });
  
  it('should the exact day of the week', function(){
    assert.equal(false, sameWeekday('Sunday'));
});

});
