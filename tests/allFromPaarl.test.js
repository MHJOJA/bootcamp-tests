
describe('AllFromPaarl function' , function(){

    it('should return registrations starts (CL)' , function(){
      assert.equal(true, isFromBellville('CL 8745, Cl'));
           });

    it('should return all registrations that starts (CL)' , function(){
       assert.equal(true, isFromBellville('Cl 1254 81, cL'));
          });
});