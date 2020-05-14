

describe('yearsAgo function', function(){

  it('should return the exact year ago', function(){
      assert.equal(23, yearsAgo('1997'));
  });
  it('should return the exact year ago', function(){
    assert.equal(25, yearsAgo('1995'));
});

});
