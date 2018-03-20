# SplitStringByCharacterGroups

splits a string by character groups that you define

var split = require('SplitStringByCharacterGroups')

var character_groups = ["A","B","C","D","E","F","G","Ab","Bb","Cb","Db","Eb","Fb","Gb","A#","B#","C#","D#","E#","F#","G#"];

var sorted = split.sorted_character_groups(character_groups);

var split_array = split.split_into_groups("BEAGG#AbB",sorted)

console.log(split_array);

//returns  ['B', 'E', 'A', 'G', 'G#', 'Ab', 'B' ]