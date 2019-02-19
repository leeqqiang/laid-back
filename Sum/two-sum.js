/**
 * @file 两数之和
 * @author leeqqiang
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  if(nums.length === 0) return []

  let map = {}

  for(let i = 0, len = nums.length; i < len; i++) {
    map[nums[i]] = i
  }

  for(let j = 0, len = nums.length; j < len; j++) {
    let minus = target - nums[j]

    if(map[minus] !== undefined && map[minus] !== j) {
      return [j, map[minus]]
    }
  }

  return []
}

let x = twoSum([3, 2, 4], 6)

console.log('x: ', x)
