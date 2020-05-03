
function isFromEasternCape(registration){
    if (registration.endsWith("EC")){
      return true;
    }
    return false;
  }
  
describe('isFromEasternCape function', function(){

  it('should return all EC registration numbers', function(){
    assert.equal(false, isFromEasternCape('registration'));
  });

});
