const isFromBellville = require('../functions/isFromBellville');


describe('isFromBellville function', function(){

  it('should return all CY registration numbers', function(){
    assert.equal(false, isFromBellville('registration'));
  });

});
