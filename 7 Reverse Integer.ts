// 7. Reverse Integer
// Solved
// Medium
// Topics
// Companies
// Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

// Assume the environment does not allow you to store 64-bit integers (signed or unsigned).

 

// Example 1:

// Input: x = 123
// Output: 321
// Example 2:

// Input: x = -123
// Output: -321
// Example 3:

// Input: x = 120
// Output: 21
 

// Constraints:

// -2pow(31) <= x <= 2pow(31) - 1

// Sol

function reverse(x: number): number {
    const isNegative:boolean = x<0
    let val:number = parseInt(`${x}`.split("").reverse().join(""))
    
    if(val>2147483648) return 0
    if(isNegative) return -val

    return val
};