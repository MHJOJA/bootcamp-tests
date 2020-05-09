function findItemsOver20(listItem){
    var x = 20
    var finalReturn = []
    for(var i=0; i<listItem.length; i++){
      var sortedList = listItem[i];
      console.log(sortedList)
      if (sortedList.qty > x){
        finalReturn.push(sortedList);
    }
  }
  return finalReturn
}

describe('findItemsOver20 function' , function(){

    it('should return the products that have a quantity higher than 20.' , function(){
           });

});