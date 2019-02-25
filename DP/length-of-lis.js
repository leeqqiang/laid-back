/**
 * @file 最长上升子序列
 * @author leeqqiang
 */

// 动态规划
function lengthOfLIS(arr) {
  if(!arr || arr.length === 0) return 0

  let len = arr.length
  let res = 1
  let dp = new Array(len).fill(1)

  for(let i = 0; i < len; i++) {
    for(let j = 0; j < i; j++) {
      if(arr[j] < arr[i]) {
        dp[i] = Math.max(dp[i], dp[j] + 1)
      }
    }

    res = Math.max(res, dp[i])
  }

  return res
}

let arr = [10, 9, 2, 5, 3, 7, 101, 18, 20]
let x = lengthOfLIS(arr)

console.log('x: ', x)
