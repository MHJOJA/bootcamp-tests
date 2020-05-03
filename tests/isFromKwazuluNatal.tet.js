
function isFromKwazuluNatal(registration){
    if (registration.endsWith("ZN")){
      return true;
    }
    return false;
  }
  
describe('isFromKwazuluNatal function', function(){

  it('should return all ZN registration numbers', function(){
    assert.equal(false, isFromKwazuluNatal('registration'));
  });

});
