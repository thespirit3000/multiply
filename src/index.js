function takeLastDigit(value) {
  return value % 10;
}

function toMind(value) {
  return Math.floor(value / 10);
}

function addZeros(array, num_of_zeros) {
  for (let index = 0; index < num_of_zeros; index++) {
    array.push(0);
  }
}

module.exports = function multiply(first, second) {
  let result = [];
  let result_row = [];
  let sumArray = [];
  let firstArray = [];
  let secondArray = [];
  firstArray = first.split('').reverse();
  secondArray = second.split('').reverse();

  //console.log(firstArray);
  let resArrayLength = firstArray.length + secondArray.length;
  let sum = 0;
  result = [];
  let mind = 0;
  for (let index_second = 0; index_second < secondArray.length; index_second++) {
    result_row = [];
    mind = 0;
    for (let index_first = 0; index_first < firstArray.length; index_first++){
      result_row.push(takeLastDigit(parseInt(secondArray[index_second])*parseInt(firstArray[index_first])+mind));
      mind = toMind(parseInt(secondArray[index_second])*parseInt(firstArray[index_first])+mind);
      //console.log(mind);
    }
    result_row.push(mind);
    result.push(result_row);
  }
  //console.log(result);
  //console.log('--------------------');
  
  //заполняем нулями начало строк
  for (let index = 1; index < result.length; index++) {
    let i = 0;
    while (i < index) {
      result[index].unshift(0);
      i++;
    }
  }
  //заполняем нулями концы строк
  for (let index = 0; index < result.length-1; index++) {
    let i = result[index].length;
    while (i < resArrayLength) {
      result[index].push(0);
      i++;
    }
  }

  //console.log(result);

  for (let index = 0; index < resArrayLength-1; index++) {
    sum =0;
    for (const i of result) {
      sum = sum + i.shift();
    }
    sumArray.push(takeLastDigit(sum+mind));
    mind = toMind(sum+mind);
    //console.log(mind);
  }
  //sumArray.push(takeLastDigit(sum+mind));

  //console.log('--------------------');
  //console.log(' ',sumArray);
  //console.log('-----------------');
  //console.log(sumArray);
 
  //let i = 0;
  //while ( i < resArrayLength -1) {
  //  let sum = 0;
  //  for (const array of result) {
  //    sum = sum + array.shift();
  //  }
  //  sum = sum + mind;
  //  sumArray.push(takeLastDigit(sum));
  //  mind = 0;
  //  mind = toMind(sum);
  //  i++;
  //}
  //for (let i = 0; i < result.length; i++) {
  //  result[i] = result[i].reverse();
  //};
  
  return sumArray.reverse().join('');
}