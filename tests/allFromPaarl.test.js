
describe('allFromPaarl function' , function(){

    it('should return registrations starting with  (CL)' , function(){
      assert.equal(true, allFromPaarl('CL 8745, CL'));
           });

    it('should return all registrations that starts (CL)' , function(){
       assert.equal(true, allFromPaarl('CL 1254 81, cL'));
          });
});