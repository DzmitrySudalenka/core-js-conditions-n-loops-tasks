/* *******************************************************************************************
 *                                                                                           *
 * Please read the following tutorial before implementing tasks:                             *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Looping_code    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration         *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch       *
 *                                                                                           *
 ******************************************************************************************* */

/**
 * Determines whether a given number is positive. Zero is considered positive.
 * This function does not use Number or Math class methods.
 *
 * @param {number} number - The number to check.
 * @return {boolean} True if the number is positive or zero, false otherwise.
 *
 * @example:
 *  10 => true
 *  0  => true
 *  -5 => false
 */
function isPositive(number) {
  return number >= 0;
}

/**
 * Returns the maximum of three numbers without using Array and Math classes methods.
 *
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @param {number} c - The third number.
 * @return {number} The maximum of the three numbers.
 *
 * @example:
 *  1, 2, 3       => 3
 *  -5, 0, 5      => 5
 *  -0.1, 0, 0.2  => 0.2
 */
function getMaxNumber(a, b, c) {
  if (a > b && a > c) return a;
  if (b > c) return b;

  return c;
}

/**
 * Checks if a queen can capture a king in the next move on an 8x8 chessboard.
 * See more details at https://en.wikipedia.org/wiki/Queen_(chess)
 *
 * @typedef {{
 *  x: number,
 *  y: number
 * }} Position
 * @param {Object} queen - The position of the queen.
 * @param {Object} king - The position of the king.
 * @return {boolean} True if the queen can capture the king, false otherwise.
 *
 * @example
 * {x: 1, y: 1}, {x: 5, y: 5} => true
 * {x: 2, y: 1}, {x: 2, y: 8} => true
 * {x: 1, y: 1}, {x: 2, y: 8} => false
 * {x: 1, y: 1}, {x: 2, y: 8} => false
 */
function canQueenCaptureKing(queen, king) {
  return (
    queen.x === king.x ||
    queen.y === king.y ||
    Math.abs(queen.x - king.x) === Math.abs(queen.y - king.y)
  );
}

/**
 * Determines whether a triangle is isosceles based on its side lengths.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} a - The length of the first side.
 * @param {number} b - The length of the second side.
 * @param {number} c - The length of the third side.
 * @return {boolean} True if the triangle is isosceles, false otherwise.
 *
 * @example:
 *  1, 2, 3   => false
 *  3, 1, 2   => false
 *  2, 3, 2   => true
 *  3, 2, 2   => true
 *  2, 2, 3   => true
 *  2, 2, 5   => false
 *  3, 0, 3   => false
 */
function isIsoscelesTriangle(a, b, c) {
  if (a + b > c && b + c > a && c + a > b) return a === b || b === c || c === a;

  return false;
}

/**
 * Converts a number to Roman numerals. The number will be between 1 and 39.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} num - The number to convert.
 * @return {string} The Roman numeral representation of the number.
 *
 * @example:
 *  1   => I
 *  2   => II
 *  5   => V
 *  10  => X
 *  26  => XXVI
 */
function convertToRomanNumerals(num) {
  let result = '';
  let numb = num;

  while (numb !== 0) {
    if (numb >= 40) {
      result += 'XL';
      numb -= 40;
    } else if (numb >= 10) {
      result += 'X';
      numb -= 10;
    } else if (numb >= 9) {
      result += 'IX';
      numb -= 9;
    } else if (numb >= 5) {
      result += 'V';
      numb -= 5;
    } else if (numb >= 4) {
      result += 'IV';
      numb -= 4;
    } else if (numb >= 1) {
      result += 'I';
      numb -= 1;
    }
  }

  return result;
}

/**
 * Converts a number to a string, replacing digits with words.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} numberStr - The number as a string.
 * @return {string} The number with digits replaced by words.
 *
 * @example:
 *  '1'       => 'one'
 *  '10'      => 'one zero'
 *  '-10'     => 'minus one zero'
 *  '10.5'    => 'one zero point five'
 *  '10,5'    => 'one zero point five'
 *  '1950.2'  => 'one nine five zero point two'
 */
function convertNumberToString(numberStr) {
  let result = '';

  for (let i = 0; i < numberStr.length; i += 1) {
    switch (numberStr[i]) {
      case '0':
        result += 'zero';
        break;
      case '1':
        result += 'one';
        break;
      case '2':
        result += 'two';
        break;
      case '3':
        result += 'three';
        break;
      case '4':
        result += 'four';
        break;
      case '5':
        result += 'five';
        break;
      case '6':
        result += 'six';
        break;
      case '7':
        result += 'seven';
        break;
      case '8':
        result += 'eight';
        break;
      case '9':
        result += 'nine';
        break;
      case '-':
        result += 'minus';
        break;
      default:
        result += 'point';
    }

    if (i < numberStr.length - 1) result += ' ';
  }

  return result;
}

/**
 * Determines whether a string is a palindrome.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} str - The string to check.
 * @return {boolean} True if the string is a palindrome, false otherwise.
 *
 * @example:
 *  'abcba'     => true
 *  '0123210'   => true
 *  'qweqwe'    => false
 */
function isPalindrome(str) {
  const strLenght = str.length;

  for (let i = 0; i < strLenght / 2; i += 1) {
    if (str[i] !== str[strLenght - i - 1]) {
      return false;
    }
  }

  return true;
}

/**
 * Finds the first occurrence of a letter in a string.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} str - The string to search.
 * @param {string} letter - The letter to find.
 * @return {number} The index of the first occurrence of the letter, or -1 if not found.
 *
 * @example:
 *  'qwerty', 'q'     => 0
 *  'qwerty', 'е'     => 4
 *  'qwerty', 'Q'     => -1
 *  'qwerty', 'p'     => -1
 */
function getIndexOf(str, letter) {
  for (let i = 0; i < str.length; i += 1) {
    if (str[i] === letter) return i;
  }

  return -1;
}

/**
 * Checks if a number contains a specific digit.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} num - The number to check.
 * @param {number} digit - The digit to search for.
 * @return {boolean} True if the number contains the digit, false otherwise.
 *
 * @example:
 *  123450, 5   => true
 *  123450, 1   => true
 *  123450, 0   => true
 *  12345, 0    => false
 *  12345, 6    => false
 */
function isContainNumber(num, digit) {
  const numStr = String(num);
  const digitStr = String(digit);

  for (let i = 0; i < numStr.length; i += 1) {
    if (numStr[i] === digitStr) return true;
  }

  return false;
}

/**
 * Finds the index of an element in an array where the sum of elements to the left equals the sum of elements to the right.
 * If such an index does not return -1.
 * In this task, the use of methods of the Array and String classes is not allowed.
 *
 * @param {number[]} arr - The array to check.
 * @return {number} The index of the balance point, or -1 if none exists.
 *
 * @example:
 *  [1, 2, 5, 3, 0] => 2    => 1 + 2 === 3 + 0 then balance element is 5 and its index = 2
 *  [2, 3, 9, 5] => 2       => 2 + 3 === 5 then balance element is 9 and its index = 2
 *  [1, 2, 3, 4, 5] => -1   => no balance element
 */
function getBalanceIndex(arr) {
  let total = 0;
  let sumLeft = 0;

  for (let i = 0; i < arr.length; i += 1) {
    total += arr[i];
  }

  for (let i = 0; i < arr.length; i += 1) {
    total -= arr[i];
    if (sumLeft === total) return i;
    sumLeft += arr[i];
  }
  return -1;
}

/**
 * Generates a spiral matrix of a given size, filled with numbers in ascending order starting from one.
 * The direction of filling with numbers is clockwise.
 * Usage of String and Array classes methods is not allowed in this task.
 *
 * @param {number} size - The size of the matrix.
 * @return {number[][]} The spiral matrix.
 *
 * @example:
 *        [
 *          [1, 2, 3],
 *  3  =>   [8, 9, 4],
 *          [7, 6, 5]
 *        ]
 *        [
 *          [1,  2,  3,  4],
 *  4  =>   [12, 13, 14, 5],
 *          [11, 16, 15, 6],
 *          [10, 9,  8,  7]
 *        ]
 */
function getSpiralMatrix(size) {
  const result = [];

  for (let i = 0; i < size; i += 1) {
    result[i] = [];
  }

  let counter = 1;
  let startColumn = 0;
  let endColumn = size - 1;
  let startRow = 0;
  let endRow = size - 1;

  while (startColumn <= endColumn && startRow <= endRow) {
    for (let i = startColumn; i <= endColumn; i += 1) {
      result[startRow][i] = counter;
      counter += 1;
    }
    startRow += 1;

    for (let i = startRow; i <= endRow; i += 1) {
      result[i][endColumn] = counter;
      counter += 1;
    }
    endColumn -= 1;

    for (let i = endColumn; i >= startColumn; i -= 1) {
      result[endRow][i] = counter;
      counter += 1;
    }
    endRow -= 1;

    for (let i = endRow; i >= startRow; i -= 1) {
      result[i][startColumn] = counter;
      counter += 1;
    }
    startColumn += 1;
  }

  return result;
}

/**
 * Rotates a matrix by 90 degrees clockwise in place.
 * Take into account that the matrix size can be very large. Consider how you can optimize your solution.
 * Usage of String and Array class methods is not allowed in this task.
 *
 * @param {number[][]} matrix - The matrix to rotate.
 * @return {number[][]} The rotated matrix.
 *
 * @example:
 *  [                 [
 *    [1, 2, 3],        [7, 4, 1],
 *    [4, 5, 6],  =>    [8, 5, 2],
 *    [7, 8, 9]         [9, 6, 3]
 *  ]                 ]
 */
function rotateMatrix(matrix) {
  const resultMatrix = matrix;
  const matrixLenght = matrix.length;
  const x = Math.floor(matrixLenght / 2);
  const y = matrixLenght - 1;

  for (let i = 0; i < x; i += 1) {
    for (let j = i; j < y - i; j += 1) {
      const temp = resultMatrix[i][j];
      resultMatrix[i][j] = resultMatrix[y - j][i];
      resultMatrix[y - j][i] = resultMatrix[y - i][y - j];
      resultMatrix[y - i][y - j] = resultMatrix[j][y - i];
      resultMatrix[j][y - i] = temp;
    }
  }

  return resultMatrix;
}

/**
 * Sorts an array of numbers in ascending order in place.
 * Employ any sorting algorithm of your choice.
 * Take into account that the array can be very large. Consider how you can optimize your solution.
 * In this task, the use of methods of the Array and String classes is not allowed.
 *
 * @param {number[]} arr - The array to sort.
 * @return {number[]} The sorted array.
 *
 * @example:
 *  [2, 9, 5]       => [2, 5, 9]
 *  [2, 9, 5, 9]    => [2, 5, 9, 9]
 *  [-2, 9, 5, -3]  => [-3, -2, 5, 9]
 */
function sortByAsc(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const resultArr = arr;
  const pivot = arr[0];
  let leftArr = [];
  let rightArr = [];

  for (let i = 1; i <= arr.length - 1; i += 1) {
    if (arr[i] < pivot) {
      leftArr[leftArr.length] = arr[i];
    } else {
      rightArr[rightArr.length] = arr[i];
    }
  }

  leftArr = sortByAsc(leftArr);
  rightArr = sortByAsc(rightArr);

  const leftArrLenght = leftArr.length;

  for (let i = 0; i < leftArrLenght; i += 1) {
    resultArr[i] = leftArr[i];
  }

  resultArr[leftArrLenght] = pivot;

  for (let i = 0; i < rightArr.length; i += 1) {
    resultArr[leftArrLenght + 1 + i] = rightArr[i];
  }

  return resultArr;
}

/**
 * Shuffles characters in a string so that the characters with an odd index are moved to the end of the string at each iteration.
 * Take into account that the string can be very long and the number of iterations is large. Consider how you can optimize your solution.
 * Usage of Array class methods is not allowed in this task.
 *
 * @param {string} str - The string to shuffle.
 * @param {number} iterations - The number of iterations to perform the shuffle.
 * @return {string} The shuffled string.
 *
 * @example:
 *  '012345', 1 => '024135'
 *  'qwerty', 1 => 'qetwry'
 *  '012345', 2 => '024135' => '043215'
 *  'qwerty', 2 => 'qetwry' => 'qtrewy'
 *  '012345', 3 => '024135' => '043215' => '031425'
 *  'qwerty', 3 => 'qetwry' => 'qtrewy' => 'qrwtey'
 */
function shuffleChar(str, iterations) {
  let resStr = str;
  const results = [resStr];

  for (let iteration = 1; iteration <= iterations; iteration += 1) {
    let evenChars = '';
    let oddChars = '';

    for (let i = 0; i < resStr.length; i += 2) {
      evenChars += resStr[i];
      oddChars += resStr[i + 1];
    }

    resStr = evenChars + oddChars;
    results[iteration] = resStr;
    if (resStr === str) {
      return results[iterations % iteration];
    }
  }

  return resStr;
}

/**
 * Returns the nearest largest integer consisting of the digits of the given positive integer.
 * If there is no such number, it returns the original number.
 * Usage of String class methods is not allowed in this task.
 *
 * @example:
 * 12345    => 12354
 * 123450   => 123504
 * 12344    => 12434
 * 123440   => 124034
 * 1203450  => 1203504
 * 90822    => 92028
 * 321321   => 322113
 *
 * @param {number} number The source number
 * @returns {number} The nearest larger number, or original number if none exists.
 */
function getNearestBigger(number) {
  const digitsArr = Array.from(String(number), Number);

  let i = digitsArr.length - 2;

  while (i >= 0 && digitsArr[i] >= digitsArr[i + 1]) {
    i -= 1;
  }

  if (i < 0) {
    return number;
  }

  let j = digitsArr.length - 1;

  while (digitsArr[j] <= digitsArr[i]) {
    j -= 1;
  }

  [digitsArr[i], digitsArr[j]] = [digitsArr[j], digitsArr[i]];

  const leftArr = [];

  for (let k = 0; k <= i; k += 1) {
    leftArr[k] = digitsArr[k];
  }

  let rightArr = [];

  for (let l = i + 1; l < digitsArr.length; l += 1) {
    rightArr[rightArr.length] = digitsArr[l];
  }

  rightArr = rightArr.sort((a, b) => a - b);

  const resultArr = [...leftArr, ...rightArr];

  let result = 0;

  for (i = 0; i < resultArr.length; i += 1) {
    result = result * 10 + resultArr[i];
  }

  return result;
}

module.exports = {
  isPositive,
  getMaxNumber,
  canQueenCaptureKing,
  isIsoscelesTriangle,
  convertToRomanNumerals,
  convertNumberToString,
  isPalindrome,
  getIndexOf,
  isContainNumber,
  getBalanceIndex,
  getSpiralMatrix,
  rotateMatrix,
  sortByAsc,
  shuffleChar,
  getNearestBigger,
};
