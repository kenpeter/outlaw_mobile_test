function main(input) {
  // split
  var lines = input.split("\n");
  var num = lines[0] * 2;
  var str = lines[1];

  console.log(num);
  console.log(str);
}

// resume
process.stdin.resume();
// set encoding
process.stdin.setEncoding("utf-8");
// input
var stdin_input = "";

// where there is data
process.stdin.on("data", function (input) {
  // concat data
  stdin_input += input;
});

process.stdin.on("end", function () {
  // call main
  main(stdin_input);
});
