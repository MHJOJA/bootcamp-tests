
var greet = function(name){
  var say = "Hello, ";
  var name = "Bob";
  return (say + name);
}

describe('The greet function', function(){

  it('should greet Bob correctly', function(){
      assert.equal('Hello, Bob', greet('Bob'));
  });

});
