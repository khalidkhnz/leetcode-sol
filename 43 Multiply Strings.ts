// 43. Multiply Strings
// Solved
// Medium
// Topics
// Companies
// Given two non-negative integers num1 and num2 represented as strings, return the product of num1 and num2, also represented as a string.

// Note: You must not use any built-in BigInteger library or convert the inputs to integer directly.

 

// Example 1:

// Input: num1 = "2", num2 = "3"
// Output: "6"
// Example 2:

// Input: num1 = "123", num2 = "456"
// Output: "56088"
 

// Constraints:

// 1 <= num1.length, num2.length <= 200
// num1 and num2 consist of digits only.
// Both num1 and num2 do not contain any leading zero, except the number 0 itself.

function multiply(num1: string, num2: string): string {
    // If any of the numbers is "0", return "0"
    if (num1 === "0" || num2 === "0") return "0";
    
    let ans:any[] = new Array(num1.length + num2.length).fill(0); // Initialize the answer array

    // Reverse the strings to make multiplication easier (starting from least significant digit)
    for (let i = num1.length - 1; i >= 0; i--) {
        for (let j = num2.length - 1; j >= 0; j--) {
            // Multiply the digits after converting them to numbers
            const product = (parseInt(num1[i]) * parseInt(num2[j]));
            // Add the product to the appropriate position in the result
            const sum = product + ans[i + j + 1];

            // Store the single digit result and carry to the next position
            ans[i + j + 1] = sum % 10; // Store current digit
            ans[i + j] += Math.floor(sum / 10); // Carry over to next place
        }
    }

    // Convert result array to string, removing leading zeros
    let result = ans.join('');
    return result.startsWith('0') ? result.slice(1) : result;
}