/**
 * @param {number[]} digits
 * @return {number[]}
 */
const plusOne = digits => {
  let i = digits.length - 1;
  let newValue = 0;
  let addOne = 1;
  while (i >= 0 && addOne) {
    newValue = digits[i] + addOne;
    addOne = Math.floor(newValue / 10);
    digits[i] = newValue % 10;
    i--;
  }
  if (addOne) digits.unshift(addOne);
  return digits;
}