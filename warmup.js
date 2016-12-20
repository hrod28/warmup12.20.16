'use strict';

var myData = [1, 2, 3, 4];

function swap(input, index_A, index_B){
  var temp = input[index_A];

  input[index_A] = input[index_B];
  input[index_B] = temp;
  //myData.reverse();
}

swap(myData, 0, 3);
swap(myData, 1, 2);
//console.log(myData);

function reverse(){
  var newArray = (myData.length / 2);
  for (var i = myData.length-1; i >= 0; i--) {
    newArray += newArray[i];
    return newArray;
  }
}

reverse(myData);
console.log(myData);
