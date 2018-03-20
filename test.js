var s = require('./index.js');

const character_groups = ["A","B","C","D","E","F","G","Ab","Bb","Cb","Db","Eb","Fb","Gb","A#","B#","C#","D#","E#","F#","G#"];

const sorted = s.sorted_character_groups(character_groups);

const split_array = s.split_into_groups("BEAGG#AbB",sorted,false)

console.log(split_array);