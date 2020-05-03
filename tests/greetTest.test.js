
var greetTest = function(name){
    var say = "Hi ";
    var name = "Thabo";
    return (say + name);
  }
  
  describe('The greetTest function', function(){
  
    it('should greet Thabo correctly', function(){
        assert.equal('Hi Thabo', greetTest('Thabo'));
    });
  
  });
  