# SplitStringByCharacterGroups

Splits a string by character groups that you define. Useful for custom regex manipulation.

## Installation

	`npm install -i splitstringbycharactergroups`

## Usage

	var split = require('SplitStringByCharacterGroups')

Split into groups method:
	split.split_into_groups(string_to_split, array_of_character_groups[, ignore_unknowns])

split_into_groups method takes as parameters: the string to split, the array of character groups, optional boolean for whether to ignore unknown character groups or return them as undefined (defaults true/ignore).

Character Group array should be sorted in reverse size order (by length of each group) to match larger elements first. You can use the sorted_character_groups method to sort your array in reverse size order:

	var character_groups = ["A","B","C","D","E","F","G","Ab","Bb","Cb","Db","Eb","Fb","Gb","A#","B#","C#","D#","E#","F#","G#"];

	var sorted = split.sorted_character_groups(character_groups);

	console.log(sorted);
	// Should return ['Gb','G#','Fb','F#','Eb','E#','Db','D#','Cb','C#','Bb','B#','Ab','A#','G','F','E','D','C','B','A' ]

## Examples

	var split = require('SplitStringByCharacterGroups')

	var character_groups = ["A","B","C","D","E","F","G","Ab","Bb","Cb","Db","Eb","Fb","Gb","A#","B#","C#","D#","E#","F#","G#"];

	var sorted = split.sorted_character_groups(character_groups);

	//using the sorted character groupings:
	var split_array = split.split_into_groups("BEAGG#AbB",sorted)
	console.log(split_array)
	//Should return  ['B', 'E', 'A', 'G', 'G#', 'Ab', 'B' ], what we want

	//without sorting:
	var split_array = split.split_into_groups("BEAGG#AbB",character_groups);
	//character groups are not in right order so returns [ 'B', 'E', 'A', 'G', 'G#', 'A', 'b', 'B' ]

Try with unknown characters:
	
	var split_array = split.split_into_groups("BEAzzzqurGG#Abvv44B",sorted);
	// [ 'B', 'E', 'A', 'zzzqur', 'G', 'G#', 'Ab', 'vv44', 'B' ];

	//set ignore unknown character groups param to false:
	var split_array = split.split_into_groups("BEAzzzqurGG#Abvv44B",sorted,false);
	// [ 'B', 'E', 'A', undefined, 'G', 'G#', 'Ab', undefined, 'B' ]