//takes array, returns sorted by decreasing length and reverse alphabetically
const sortCharacterGroups = characterList =>
  characterList.sort((a, b) => {
    return (
      b.length - a.length || b.localeCompare(a) // sort by length, if equal then
    ); // sort by dictionary order
  });

//splits string into array with character group elements
const splitStringByCharacterGroups = (
  input,
  characterGroups,
  options = {
    ignoreExtraneousCharacters: true,
    splitExtraneousCharacters: false
  }
) => {
  // base case
  if (input === "") return [];

  const ignoreExtraneousCharacters =
    options.ignoreExtraneousCharacters === false ? false : true;
  const splitExtraneousCharacters =
    options.splitExtraneousCharacters === true ? true : false;

  for (let characterGroup of characterGroups) {
    const match = input.indexOf(characterGroup);
    if (match > -1) {
      // split input string into three parts: before the matched string,
      // the matched string (character group), and after matched string
      let beforeMatchedString, matchedString, afterMatchedString;
      beforeMatchedString = input.substring(0, match);
      matchedString = characterGroup;
      afterMatchedString = input.substring(match + matchedString.length);

      //recursively split new strings, only on non-empty substrings
      return [
        ...splitStringByCharacterGroups(beforeMatchedString, characterGroups, {
          ignoreExtraneousCharacters,
          splitExtraneousCharacters
        }),
        matchedString,
        ...splitStringByCharacterGroups(afterMatchedString, characterGroups, {
          ignoreExtraneousCharacters,
          splitExtraneousCharacters
        })
      ];
    }
  }

  // characters not in [characterGroups] argument are returned anyway, as is or as undefined
  // depending on options
  if (ignoreExtraneousCharacters) {
    if (splitExtraneousCharacters) return input.split("");
    if (!splitExtraneousCharacters) return [input];
  } else if (!ignoreExtraneousCharacters) {
    if (splitExtraneousCharacters) return Array(input.length).fill(undefined);
    if (!splitExtraneousCharacters) return [undefined];
  }
};

export { splitStringByCharacterGroups, sortCharacterGroups };
