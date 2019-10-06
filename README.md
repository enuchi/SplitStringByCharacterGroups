# SplitStringByCharacterGroups

Splits a string by character groups that you define. Useful for custom regex manipulation

Helps you split:

`'BEAGG#AbB'` into `[ 'B', 'E', 'A', 'G', 'G#', 'Ab', 'B' ]`

`'daʊnloʊd'` into `[ 'd', 'aʊ', 'n', 'l', 'oʊ', 'd' ]`


## Installation

	$ npm i splitstringbycharactergroups

## Usage

### load the module

	const split = require('splitstringbycharactergroups');

### call `splitStringByCharacterGroups`

	const input = 'abcd';
	const characterGroups = ['bc','a','d'];
	const result = split.splitStringByCharacterGroups(input, characterGroups)
	// result should be [ 'a', 'bc', 'd' ]

`splitStringByCharacterGroups` method takes 4 arguments:
1. the `input`
2. `characterGroups`, an ordered array of character groups. will usually want longest first. 
3. [optional/boolean] `ignoreExtraneousCharacters`? defaults to true/ignore. set false to return unidentified chars as undefined. see examples. 
4. [optional/boolean] `splitExtraneousCharacters`?. defaults to false/doesn't split. set to true to split unidentified substrings into individual elements of single char length. see examples.


### call `sortCharacterGroups` on an array to return array sorted by character length and reversed alphabetically

	const character_groups = ['A','B','C','D','E','F','G','Ab','Bb','Cb','Db','Eb','Fb','Gb','A#','B#','C#','D#','E#','F#','G#'];
	const sorted = split.sortCharacterGroups(character_groups);
	//sorted should be ['Gb','G#','Fb','F#','Eb','E#','Db','D#','Cb','C#','Bb','B#','Ab','A#','G','F','E','D','C','B','A']

## Examples

Get string with musical pitches split into correct groupings

	const split = require('SplitStringByCharacterGroups')
	const character_groups = ['A','B','C','D','E','F','G','Ab','Bb','Cb','Db','Eb','Fb','Gb','A#','B#','C#','D#','E#','F#','G#'];
	const sorted = split.sortCharacterGroups(character_groups);

	const input = 'BEAGG#AbB';
	const result = split.splitStringByCharacterGroups(input,sorted);
	//result should be ['B', 'E', 'A', 'G', 'G#', 'Ab', 'B' ], what we want

	//without sorting:
	const split_array = split.splitStringByCharacterGroups('BEAGG#AbB',character_groups);
	//character groups are not in right order so returns [ 'B', 'E', 'A', 'G', 'G#', 'A', 'b', 'B' ]

### optional arguments

Works with unidentified characters:

	const split_array = split.splitStringByCharacterGroups('BEAzzzqurGG#Abvv44B', sorted);
	// [ 'B', 'E', 'A', 'zzzqur', 'G', 'G#', 'Ab', 'vv44', 'B' ];

Set `ignoreExtraneousCharacters` param to false to return unidentified characters as `undefined`:

	const split_array = split.splitStringByCharacterGroups('BEAzzzqurGG#Abvv44B', sorted, false);
	// [ 'B', 'E', 'A', undefined, 'G', 'G#', 'Ab', undefined, 'B' ]

Set both `ignoreExtraneousCharacters` and `splitExtraneousCharacters` params to true to split unidentified substrings into individual single-char-length elements. 

	const character_groups = ['eɪ','aɪ','aʊ','oʊ','ɔɪ'];
	const split_array = s.splitStringByCharacterGroups('daʊnloʊd',character_groups,true,true)
	// returns [ 'd', 'aʊ', 'n', 'l', 'oʊ', 'd' ]


## Support

ES6+
Node 6+

## To do

* Optimize for huge strings/character sets
* Ambiguous cases
* Option to split unidentified substrings into individual elements
