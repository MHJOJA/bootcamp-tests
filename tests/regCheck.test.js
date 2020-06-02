
  describe('regCheck function', function(){

    it('should return all  registration numbers', function(){
        assert.equal(false, regCheck('CA 7854 145, CA'));
    });
    
    it('should check  all registration numbers', function(){
      assert.equal(false, regCheck('CY 45 548, CY'));
  });

});
