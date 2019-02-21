/**
 * @file 三数之和
 * @author leeqqiang
 */

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  if(nums.length === 0) return []
  let result = []

  nums = nums.sort((a, b) => a - b)

  for(let i = 0, len = nums.length; i < len - 2; i++) {
    if(nums[i] > 0) return result
    if(i > 0 && nums[i] === nums[i - 1]) continue

    for(let j = i + 1, k = len - 1; j < k;) {
      let valI = nums[i]
      let valJ = nums[j]
      let valK = nums[k]
      let sum = valI + valJ + valK

      if(sum === 0) {
        result.push([valI, valJ, valK])
        j++
        k--

        while(j < k && nums[j] === nums[j - 1]) {
          j++
        }

        while(j < k && nums[k] === nums[k + 1]) {
          k--
        }
      }
      else if(sum > 0) {
        k--
      }
      else {
        j++
      }
    }
  }

  return result
}

let nums = [-1, 0, 1, 2, -1, -4]
let x = threeSum(nums)

console.log('x: ', x)
