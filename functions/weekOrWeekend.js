function weekOrWeekend(day){
    var week = ['Monday','Tuesday','Wednesday','Thursday','Friday'];
    var weekend = ['Saturday','Sunday'];
    if (!day.startsWith('S')){
        return 'week';
    }else {
        return 'weekend';
    }
}