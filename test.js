var s = require('./index.js');

var character_groups = ['eɪ','aɪ','aʊ','oʊ','ɔɪ'];

var split_array = s.split_into_groups("daʊnloʊd",character_groups,true,true)

console.log(split_array);