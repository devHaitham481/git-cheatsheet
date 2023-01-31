let string = 'amazon';

const findPermutations = (string, result) => {
  if (string.length == 0) {
    console.log(result);
  }

  for (var i = 0; i < string.length; i++) {
    //
    let rest = string.substring(0, i) + string.substring(i + 1);

    findPermutations(rest, result + string[i]);
  }
};

findPermutations(string, '');
