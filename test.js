const assert = require('assert');

const split = require('./dist/index.js');

const input = 'daʊnloʊd';
const characterGroups = ['eɪ','aɪ','aʊ','oʊ','ɔɪ'];
const ignoreExtraneousCharacters = true;
const splitExtraneousCharacters = false;

const result = split.splitStringByCharacterGroups(
  input, characterGroups, {ignoreExtraneousCharacters, splitExtraneousCharacters}
)

const expectedResult = [ 'd', 'aʊ', 'n', 'l', 'oʊ', 'd' ];

assert.deepEqual(result, expectedResult);
console.log(`success! ${result} is equal to ${expectedResult}`)