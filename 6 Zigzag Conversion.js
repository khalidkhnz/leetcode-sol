// 6. Zigzag Conversion
// Solved
// Medium
// Topics
// Companies
// The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)

// P   A   H   N
// A P L S I I G
// Y   I   R
// And then read line by line: "PAHNAPLSIIGYIR"

// Write the code that will take a string and make this conversion given a number of rows:

// string convert(string s, int numRows);
 

// Example 1:

// Input: s = "PAYPALISHIRING", numRows = 3
// Output: "PAHNAPLSIIGYIR"
// Example 2:

// Input: s = "PAYPALISHIRING", numRows = 4
// Output: "PINALSIGYAHRPI"
// Explanation:
// P     I    N
// A   L S  I G
// Y A   H R
// P     I
// Example 3:

// Input: s = "A", numRows = 1
// Output: "A"
 

// Constraints:

// 1 <= s.length <= 1000
// s consists of English letters (lower-case and upper-case), ',' and '.'.
// 1 <= numRows <= 1000


/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
  if(numRows<2) return s
  
  let strArr = s.split("")
  let ans = ""
  for(let i=0;i<numRows;i++){
    const idx1 = numRows + (numRows-2) - 2*i
    const idx2 = i*2
    let startIdx = i
     if(strArr[startIdx]){
      ans += strArr[startIdx]
    }
    
    while(true){
      if(idx1!==0) {
        startIdx+=idx1
        if(strArr[startIdx]){
        ans += strArr[startIdx]
        }
      }
      if(idx2!==0) {
        startIdx+=idx2
        if(strArr[startIdx]){
        ans += strArr[startIdx]
        }
      }
      if(!strArr[startIdx]) break
    }
  }
  return ans
};