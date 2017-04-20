// process
function myprocess(data, the_diff){
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
    result[i] = result[i].split(',');
  }

  return result;
}


// main
function main(input) {
  var lines = input.split("\n");
  var arr_len = lines[0];
  var the_diff = lines[lines.length-1];
  var num_arr = [];

  for(var i=1; i<lines.length-1; i++) {
    num_arr[i-1] = lines[i];
  }

  /*
  console.log(arr_len);
  console.log(the_diff);
  console.log(num_arr);
  */

  var output = myprocess(num_arr, parseInt(the_diff));
  //console.log(output);
  console.log(output.length);
}



process.stdin.resume();
process.stdin.setEncoding("utf-8");
var stdin_input = "";

process.stdin.on("data", function (input) {
    stdin_input += input;
});

/*
process.stdin.on("end", function () {
   main(stdin_input);
});
*/

process.on('SIGINT', function () {
  main(stdin_input);
  process.exit(0);
});
