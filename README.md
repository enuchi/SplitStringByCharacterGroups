# SplitStringByCharacterGroups

Splits a string by character groups that you define. Useful for custom regex manipulation

Split:
`'BEAGG#AbB'` into `[ 'B', 'E', 'A', 'G', 'G#', 'A', 'b', 'B' ]`
`'daʊnloʊd'` into `[ 'd', 'aʊ', 'n', 'l', 'oʊ', 'd' ]`


## Installation

	$ npm install -i splitstringbycharactergroups

## Usage

### load the module

	var split = require('SplitStringByCharacterGroups');

### call `split_into_groups`

	var string_to_split = 'abcd';
	var character_group_array = ['bc','a','d'];
	var result = split.split_into_groups(string_to_split,character_group_array)
	//result should be [ 'a', 'bc', 'd' ]

`split_into_groups` method takes 3 params:
1. string_to_split
2. character_group_array; ordered array of character groups. usually longest first.
3. [optional boolean] ignore_unknown_characters?; defaults to true/ignore. set false to return as unidentified chars as undefined 


### call `sorted_character_groups` on an array to return array sorted by character length and reversed alphabetically

	var character_groups = ["A","B","C","D","E","F","G","Ab","Bb","Cb","Db","Eb","Fb","Gb","A#","B#","C#","D#","E#","F#","G#"];
	var sorted = split.sorted_character_groups(character_groups);
	//sorted should be ['Gb','G#','Fb','F#','Eb','E#','Db','D#','Cb','C#','Bb','B#','Ab','A#','G','F','E','D','C','B','A']

## Examples

Get string with musical pitches split into correct groupings

	var split = require('SplitStringByCharacterGroups')
	var character_groups = ["A","B","C","D","E","F","G","Ab","Bb","Cb","Db","Eb","Fb","Gb","A#","B#","C#","D#","E#","F#","G#"];
	var sorted = split.sorted_character_groups(character_groups);

	var string_to_split = "BEAGG#AbB";
	var result = split.split_into_groups(string_to_split,sorted);
	//result should be ['B', 'E', 'A', 'G', 'G#', 'Ab', 'B' ], what we want

	//without sorting:
	var split_array = split.split_into_groups("BEAGG#AbB",character_groups);
	//character groups are not in right order so returns [ 'B', 'E', 'A', 'G', 'G#', 'A', 'b', 'B' ]

Woks with unidentified characters:

	var split_array = split.split_into_groups("BEAzzzqurGG#Abvv44B",sorted);
	// [ 'B', 'E', 'A', 'zzzqur', 'G', 'G#', 'Ab', 'vv44', 'B' ];

Set 3rd param to false to return unidentified characters as `undefined`:

	var split_array = split.split_into_groups("BEAzzzqurGG#Abvv44B",sorted,false);
	// [ 'B', 'E', 'A', undefined, 'G', 'G#', 'Ab', undefined, 'B' ]

## Support

ES6+

## To do

* Optimize for huge strings/character sets
* Ambiguous cases
* Option to split unidentified substrings into individual elements
