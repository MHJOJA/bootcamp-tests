function allFromTown(list,boy){
  console.log(list)
  var plates = list.split(",");
  console.log(boy);
  var x = ([]);
  for(var i=0; i<plates.length; i++){
    var temp =plates[i].trim()
    if(temp.startsWith(boy)){
       x.push(temp);
  }
}

return x;
}
