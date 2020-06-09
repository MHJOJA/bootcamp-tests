
describe('allFromTownfunction' , function(){

    it('should return  true if registrations matches the location' , function(){
      assert.deepEqual(['CL 8745'], allFromTown('CL 8745', 'CL'));
           });

  
           it('should empty list if no loc matchies the registration' , function(){
            assert.deepEqual([], allFromTown('CA 123', 'CY 123'));
                 });
});