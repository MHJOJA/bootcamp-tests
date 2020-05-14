
describe('isFromGauteng function', function(){

  it('should return all GP registration numbers', function(){
    assert.equal(false, isFromGauteng('HGF 582 GP,GP'));
  });
  
  it('should return all GP registration numbers', function(){
    assert.equal(false, isFromGauteng('HGF 7894 GP,GP'));
  });

});
