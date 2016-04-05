var names = ['Chris', 'Michael', 'Jim Bo', 'James', 'Erica', 'Jeremiah', 'Bob'];

//...given this array, implement the following:

function allStringsContainingLetterI(arr) {
  var output = [];
  for (var i = 0; i < arr.length; i++) {
    var str = arr[i];
    if (str.indexOf('i') !== -1) {
      output.push(str);
    }
  }
  return output;
}
console.log(allStringsContainingLetterI(names));
//result: ['Chris', 'Michael', 'Jim Bo', 'Erica', 'Jeremiah']


function firstStringOverFiveInLength(arr) {
  var output = '';
  for (var i = 0; i < arr.length; i++) {
    if (arr[i].length > 5) {
      output += arr[i];
      break;
    }
  }
  return output;
}

console.log(firstStringOverFiveInLength(names));

//result: 'Michael'

function allItemsOverFiveInLength(arr) {
  var output = [];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i].length > 5) {
      output.push(arr[i]);
    }
  }
  return output;
}

console.log(allItemsOverFiveInLength(names));
//result: ['Michael', 'Jim Bo', 'Jeremiah']



function reverseItems(arr) {
  var output = [];
  for (var i = arr.length - 1; i >= 0; i--) {
    output.push(arr[i]);
  }
  return output;
}
console.log(reverseItems(names));
//result: ['Bob', 'Jeremiah', 'Erica', 'James', 'Jim Bo', 'Michael', 'Chris']



function commaDelimitValues(arr) {
  var output = '';
  for (var i = 0; i < arr.length; i++) {
    output = arr.join(',');
  }
  return output;
}
console.log(commaDelimitValues(names));
//result: 'Chris,Michael,Jim Bo,James,Erica,Jeremiah,Bob'
