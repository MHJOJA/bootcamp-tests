

describe('yearsAgo function', function(){

  it('should return the exact year ago', function(){
      assert.equal(1, yearsAgo('year'));
  });
  it('should return the exact year ago', function(){
    assert.equal(2, yearsAgo('1995'));
});

});
