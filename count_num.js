function main(input) {
  var lines = input.split("\n");
  var num = lines[0];
  var num_arr = num.split('');

  // h
  var histogram = {
    0: 0,
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
    6: 0,
    7: 0,
    8: 0,
    9: 0
  };
  var out_arr = [];

  // loop
  for (var i = 0, len = num_arr.length; i < len; i++) {
    // get key
    var the_num = num_arr[i];
    // add up
    histogram[the_num] = (histogram[the_num] || 0) + 1;
  }

  //console.log(histogram);

  for(prop in histogram) {
    var line = prop + ' ' + histogram[prop];
    console.log(line);
  }

  /*
  histogram.forEach(function(value, index) {
    var out = index + ' ' + value;
    out_arr.push(out);
  });

  for(prop in ) {

  }

  for (var i = 0, len = out_arr.length; i < len; i++) {
    var myout = out_arr[i];
    console.log(myout);
  }
  */

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
