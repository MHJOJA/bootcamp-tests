

describe('greet function', function(){

  it("Should greet Bob withh 'Hello, Bob' ", function(){
      assert.equal('Hello, Bob', greet('Bob'));
  });
  it("Should greet Zola withh 'Hello, Zola' ", function(){
    assert.equal('Hello, Zola', greet('Zola'));
  }); 
});