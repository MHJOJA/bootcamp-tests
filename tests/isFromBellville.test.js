function isFromBellville(registration){
  if (registration.startsWith("CY")){
    return true;
  }
  return false;
}


describe('isFromBellville function' , function(){
    it('should return registrations starts (CY)' , function(){
      assert.equal(false, isFromBellville('CY 8785, CY'));
           });
});