"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sortCharacterGroups = exports.splitStringByCharacterGroups = void 0;

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

//takes array, returns sorted by decreasing length and reverse alphabetically
var sortCharacterGroups = function sortCharacterGroups(characterList) {
  return characterList.sort(function (a, b) {
    return b.length - a.length || b.localeCompare(a) // sort by length, if equal then
    ; // sort by dictionary order
  });
}; //splits string into array with character group elements


exports.sortCharacterGroups = sortCharacterGroups;

var splitStringByCharacterGroups = function splitStringByCharacterGroups(input, characterGroups) {
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {
    ignoreExtraneousCharacters: true,
    splitExtraneousCharacters: false
  };
  // base case
  if (input === "") return [];
  var ignoreExtraneousCharacters = options.ignoreExtraneousCharacters === false ? false : true;
  var splitExtraneousCharacters = options.splitExtraneousCharacters === true ? true : false;
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = characterGroups[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var characterGroup = _step.value;
      var match = input.indexOf(characterGroup);

      if (match > -1) {
        // split input string into three parts: before the matched string,
        // the matched string (character group), and after matched string
        var beforeMatchedString = void 0,
            matchedString = void 0,
            afterMatchedString = void 0;
        beforeMatchedString = input.substring(0, match);
        matchedString = characterGroup;
        afterMatchedString = input.substring(match + matchedString.length); //recursively split new strings, only on non-empty substrings

        return [].concat(_toConsumableArray(splitStringByCharacterGroups(beforeMatchedString, characterGroups, {
          ignoreExtraneousCharacters: ignoreExtraneousCharacters,
          splitExtraneousCharacters: splitExtraneousCharacters
        })), [matchedString], _toConsumableArray(splitStringByCharacterGroups(afterMatchedString, characterGroups, {
          ignoreExtraneousCharacters: ignoreExtraneousCharacters,
          splitExtraneousCharacters: splitExtraneousCharacters
        })));
      }
    } // characters not in [characterGroups] argument are returned anyway, as is or as undefined
    // depending on options

  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator["return"] != null) {
        _iterator["return"]();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  if (ignoreExtraneousCharacters) {
    if (splitExtraneousCharacters) return input.split("");
    if (!splitExtraneousCharacters) return [input];
  } else if (!ignoreExtraneousCharacters) {
    if (splitExtraneousCharacters) return Array(input.length).fill(undefined);
    if (!splitExtraneousCharacters) return [undefined];
  }
};

exports.splitStringByCharacterGroups = splitStringByCharacterGroups;