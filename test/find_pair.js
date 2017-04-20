// 2 sum, nums === array
// target_num === the diff
function twoSum(nums, target_num) {
  // map, array???, what map
  var map = [];
  // index_num, array??, what index_num
  var indexnum = [];

  // loop
  // starts at x
  // nums === num array
  for (var x = 0; x < nums.length; x++)
  {
    // nums[x] === a number
    // nums[x] as a key, why.....?
    // map has a key
    // map has a key not null....
    if (map[nums[x]] != null)
    {
      // map with the value in array ==== index
      index = map[nums[x]];
      // indexnum[0] assign, map[nums[x]], add 1
      indexnum[0] = index+1;
      // indexnum[1] assign, x from loop, add 1
      indexnum[1] = x+1;
      // break
      break;
    }
    else
    {
      // target_num (50) - whatever in array
      // assign x (index) from loop
      map[target_num - nums[x]] = x;
    }
  }

  // return indexnum......
  return indexnum;
}


var myinput = twoSum([1, 4, 5, 7, 8, 9], 3);
console.log('--- run ---');
console.log(myinput);
