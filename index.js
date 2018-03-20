
//takes array, returns sorted by decreasing length and reverse alphabetically
exports.sorted_character_groups = function(array) {
  return array.sort(function(a, b) {
    return b.length - a.length || // sort by length, if equal then
      b.localeCompare(a);    // sort by dictionary order
    });
}


//splits string into array with character group elements
split_into_groups_function = function(string_input,character_array,ignore_extraneous_characters) {
  
  //base case, string is just 1 element which is in the character_array
  if (character_array.indexOf(string_input) > -1) {
    return string_input;

  } else {
    //test each character group
    for (var i = 0; i<character_array.length; i++) {
      //match is index in 
      var match = string_input.indexOf(character_array[i]);
      if (match > -1) {

        //split into A,B,C: before matched string, matched string, after matched string
        var A,B,C;
        A = string_input.substring(0,match);
        B = character_array[i];
        C = string_input.substring(match + B.length);

        //recursively split new strings, only on non-empty substrings
        //collapse multi-dimensional arrays with spread operator (ES6)
        if (A.length === 0) {
          return [].concat(...[B,
                               split_into_groups_function(C,character_array,ignore_extraneous_characters)]);
        } else if (C.length === 0) {
          return [].concat(...[split_into_groups_function(A,character_array,ignore_extraneous_characters),
                               B]);
        } else {
          return [].concat(...[split_into_groups_function(A,character_array,ignore_extraneous_characters),
                               B,
                               split_into_groups_function(C,character_array,ignore_extraneous_characters)]);
        };
      };
    };
    //characters not in character_array are returned anyway
    if (ignore_extraneous_characters) {return string_input};
  };
};

exports.split_into_groups = function(string_input,character_array,ignore_extraneous_characters = true) {
  if (typeof string_input != 'string') {
    return "error: string_input not a string";
  };
  if (!Array.isArray(character_array)) {
    return "error: character_array not an array";
  };
  if (typeof ignore_extraneous_characters != 'boolean') {
    return "error: ignore_extraneous_characters not a boolean";
  };
  return split_into_groups_function(string_input,character_array,ignore_extraneous_characters);
};