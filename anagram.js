function compare(a, b) {
  var y = a.split("").sort().join("");
  var z = b.split("").sort().join("");

  return z === y;
}

function main(input) {
  var lines = input.split("\n");
  var word1 = lines[0];
  var word2 = lines[1];

  var condi = compare(word1, word2);
  if(condi === true) {
    console.log('true');
  }
  else {
    console.log('false');
  }
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
