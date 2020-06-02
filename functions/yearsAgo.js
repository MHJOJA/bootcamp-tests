function yearsAgo(year){
  var todaysDate = new Date();
  var fullYear = todaysDate.getFullYear();
  var howManyYearsAgo = fullYear - year;
  return  howManyYearsAgo;
};
