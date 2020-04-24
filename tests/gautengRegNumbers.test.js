
function isFromGauteng(registration){
    if (registration.endsWith("GP")){
      return true;
    }
    return false;
  }
  
describe('isFromGauteng function', function(){

  it('should return all GP registration numbers', function(){
    assert.equal(false, isFromGauteng('registration'));
  });

});
