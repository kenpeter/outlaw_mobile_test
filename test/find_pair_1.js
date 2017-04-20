// data
var sample_data = [0, 1, 100, 99, 0, 10, 90, 30, 55, 33, 55, 75, 50, 51, 49, 50, 51, 49, 51]

// process
function process(data){
  // result array, push to result, not duplicated.
  var result = [];
  // 1
  var a;
  // 2
  var b;

  // loop for all data, i
  for (var i=0; i < data.length; i++) {
    // number 1, will keep looping this one.
    a = data[i];

    // loop for all data, j
    for (var j=0; j < data.length; j++) {
      // number 2
      b = data[j];

      // add up is 100
      if(
        (parseInt(a) + parseInt(b)) === 100 &&
        result.indexOf(a+","+b) == -1 &&
        result.indexOf(b+","+a ) == -1
      ) {
        // push
        result.push( a+","+b );
      }
    }
  }

  // test
  console.log(result);

  for (var i=0; i < result.length; i++) {
    result[i] = result[i].split(',')
  }

  return result
}

var out = process(sample_data);
console.log(out);
