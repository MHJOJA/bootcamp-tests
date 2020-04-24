function getDay(day){
  const date = new Date(day);
  var weekDays=['Sunday','Monday','Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  return (weekDays[date.getDay()]);
}


describe('getDayfunction', function(){

  it('should retun the day of the week', function(){
    assert.equal(undefined, getDay('day'));
  });

});
