
describe('isFromGauteng function', function(){

  it('should return all GP registration numbers', function(){
    assert.equal(true, isFromGauteng('HGF 582 GP,GP'));
  });
  
  it('should fail if registration numbers does not end with GP', function(){
    assert.equal(false, isFromGauteng('GHS 894 EC,ZOLA ZN'));
  });

});
