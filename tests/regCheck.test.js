
const regCheck = require('../functions/regCheck');
  describe('regCheck function', function(){

    it('should return all  registration numbers', function(){
        assert.equal(false, regCheck('registration'));
    });

});
