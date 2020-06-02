function getDay(day){
    const date = new Date(day);
    var weekDays=['Sunday','Monday','Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return (weekDays[date.getDay()]);
    
    
  }
