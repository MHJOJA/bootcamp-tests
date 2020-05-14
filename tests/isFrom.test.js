describe('isFrom function', function(){

  it('should return all  registration numbers with locatoion', function(){
      assert.equal(false, isFrom('CY 1254,CY'));
  });
  it('should return registration numbers with  their locatoion', function(){
    assert.equal(false, isFrom('registration,location'));
});

});
