function sumArray(arr, n) {
  if (n <= 0) return 0;
  return arr[n - 1] + sumArray(arr, n - 1);
}

console.log(sumArray([1, 2, 3, 4, 5], 5));
