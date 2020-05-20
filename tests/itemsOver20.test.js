
describe('findItemsOver20 function' , function(){

    it('should return the products that have a quantity higher than 20.' , function(){
        assert.equal('20', findItemsOver('itemList'));

           });

           it('should return the products that have a quantity over 20.' , function(){
            assert.equal('20', findItemsOver('itemList'));
          });

});