
describe('isFromBellville function' , function(){

    it('should return registrations starts (CY)' , function(){
      assert.equal(true, isFromBellville('CY 8785, CY'));
           });

    it('should return registrations starts (CY)' , function(){
       assert.equal(true, isFromBellville('CY 698, CY'));
          });
});