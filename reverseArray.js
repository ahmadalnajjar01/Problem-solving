function reverseArray(arr, reversed = []) {
  if (arr.length === 0) return reversed;
  reversed.push(arr.pop());
  return reverseArray(arr, reversed);
}

console.log(reverseArray([1, 2, 3, 4, 5])); 
