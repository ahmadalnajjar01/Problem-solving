function isBalanced(expression) {
  let stack = [];
  let pairs = { ")": "(", "}": "{", "]": "[" };

  for (let char of expression) { 
    if (char === "(" || char === "{" || char === "[") {
      stack.push(char);
    } else if (char === ")" || char === "}" || char === "]") {
      if (stack.pop() !== pairs[char]) return false; 
    }
  }
  return stack.length === 0;
}

console.log(isBalanced("[()]{}{[()()]()}")); // true
console.log(isBalanced("[(])")); // false
