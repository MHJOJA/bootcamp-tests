
describe('isFromGauteng function', function(){

  it('should return all GP registration numbers', function(){
    assert.equal(true, isFromGauteng('HGF 582 GP,GP'));
  });
  
  it('should fail if egistration numbers does not ending with GP', function(){
    assert.equal(true, isFromGauteng('GHS 894 EC,ZOLA ZN'));
  });

});
