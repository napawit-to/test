module.exports.convert = function(number){
  const romanArray = ["I","IV","V","IX","X","XL","L"];
  const arabicArray = [1,4,5,9,10,40,50];
  var answer = "";



  for (let arrayIndex = romanArray.length - 1; arrayIndex >= 0; arrayIndex--)  {


    while(number>=arabicArray[arrayIndex]){
      answer += romanArray[arrayIndex];
      number -= arabicArray[arrayIndex];

    }

  }


  return answer;
}
