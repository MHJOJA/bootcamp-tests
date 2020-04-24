const assert = require('assert');
const countRegNumber = require('../functions/countRegNumber');

describe('countRegNumbers function', function(){

  it('should return all  registration numbers', function(){
    assert.equal(1, countRegNumber('registration'));
  });

});
