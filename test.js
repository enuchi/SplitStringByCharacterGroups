var s = require('./index.js');

const character_groups = ['p','b','t','d','k','ɡ','ʧ','ʤ','m','n','ŋ','j','θ','ð','f','v','s','z','ʃ','ʒ','h','l','ɹ','w','i','ɪ','ɛ','æ','ɑ','ə','ɚ','ɔ','ʊ','u','eɪ','aɪ','aʊ','oʊ','ɔɪ'];

const sorted = s.sorted_character_groups(character_groups);

const split_array = s.split_into_groups("daʊnloʊd",sorted,false)

console.log(split_array);