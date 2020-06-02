
describe('isFromGauteng function', function(){

  it('should return all GP registration numbers', function(){
    assert.equal(true, isFromGauteng('HGF 582 GP,GP'));
  });
  
  it('should return all GP registration numbers', function(){
    assert.equal(true, isFromGauteng('HGF 7894 GP,GP'));
  });

});
