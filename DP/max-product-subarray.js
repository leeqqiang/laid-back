/**
 * @file 乘积最大子序列
 * @author leeqqiang
 */

// 暴力求解
function maxProductSubarray(nums) {
  if(!nums || (nums && nums.length === 0)) return 0

  let max = Number.MIN_SAFE_INTEGER

  for(let i = 0, len = nums.length; i < len; i++) {
    for(let j = i; j < len; j++) {
      let sub = nums.slice(i, j + 1)
      let product = 1

      for(let k = 0, subLen = sub.length; k < subLen; k++) {
        product *= sub[k]
      }

      if(product > max) {
        max = product
      }
    }
  }

  return max
}

// 子序列的组合
function subarray(nums) {
  let result = []

  for(let i = 0, len = nums.length; i < len; i++) {
    for(let j = i; j < len; j++) {
      result.push(nums.slice(i, j + 1))
    }
  }

  return result
}

// 一个数组的子序列组合数
function subarrayCount(num) {
  let count = 0

  for(let i = 0; i < num; i++) {
    for(let j = i; j < num; j++) {
      count++
    }
  }

  return count
}

// 动态规划
function maxProductSubarray2(nums) {
  if(!nums) return 0

  let len = nums.length

  if(len === 0) return 0

  let res = Number.MIN_SAFE_INTEGER
  // 状态的定义
  let dp = new Array(len).fill([])

  dp[0][0] = nums[0]
  dp[0][1] = nums[0]

  for(let i = 1; i < len; i++) {
    let curItem = nums[i]

    // 状态转移方程
    dp[i][0] = Math.max(dp[i-1][0] * curItem, dp[i-1][1] * curItem, curItem)
    dp[i][1] = Math.min(dp[i-1][0] * curItem, dp[i-1][1] * curItem, curItem)

    // 最优子结构
    res = Math.max(res, dp[i][0])
  }

  return res
}

let nums = [2, 3, -2, 4, 5]

let x = maxProductSubarray(nums)
let y = subarrayCount(4)
let z = subarray(nums)
let xx = maxProductSubarray2(nums)

console.log('x: ', x)
console.log('y: ', y)
console.log('z: ', z)
console.log('xx: ', xx)


