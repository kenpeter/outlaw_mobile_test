// data
var sample_data = [1, 4, 5, 7, 8, 9];
var the_diff = 3;

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
        Math.abs(parseInt(a) - parseInt(b)) === the_diff &&
        result.indexOf(a+","+b) == -1 &&
        result.indexOf(b+","+a ) == -1
      ) {
        // push
        // [ '0,100', '1,99', '10,90', '50,50', '51,49' ]
        result.push( a+","+b );
      }
    }
  }

  // test
  //console.log(result);

  for (var i=0; i < result.length; i++) {
    result[i] = result[i].split(',')
  }

  return result
}

var out = process(sample_data);
console.log(out);
