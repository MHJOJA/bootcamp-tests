
describe('allFromPaarl function' , function(){

    it('should return registrations starting with  (CL)' , function(){
      assert.equal(true, allFromPaarl('CL 8745, CL'));
           });

    it('should fail if  registrations doesnt starts with (CL)' , function(){
       assert.equal(true, allFromPaarl('CF 1254 81, cA'));
          });
});