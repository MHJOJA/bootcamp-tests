function isDayName(day){
    if (day == "Monday" || day == "Tuesday" || day == "Wednesday" || day == "Thursday" || day == "Friday " || day == "Saturday" || day == "Sunday"){   
    return true;
  }
   return false;
  }
  
  describe('isDay function', function(){

    it('should return day of the week', function(){
        assert.equal(3, '3', '== coerces values to strings');

    });

});