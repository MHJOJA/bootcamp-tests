
function isFrom(registration, location){
  if(registration.startsWith(location)){
    return true;
  }
  return false;
};

describe('isFrom function', function(){

  it('should return all  registration numbers', function(){
      assert.equal(false, isFrom('registration,location'));
  });

});
