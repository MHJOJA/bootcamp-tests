function weekOrWeekend(day){
    var week = ['Monday','Tuesday','Wednesday','Thursday','Friday'];
    var weekend = ['Saturday','Sunday'];
    if (!day.startsWith('S')){
        return 'week';
    }else {
        return weekend;
    }
}
describe('isWeekOrWeekend function', function(){

    it('should return week or weekend', function(){
      assert.equal('week', weekOrWeekend('Tuesday'));
    });
    
    it('should return week or weekend', function(){
        assert.equal('week', weekOrWeekend(['Monday'));
      });
    
  
  });
  