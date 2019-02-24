/**
 * @file 爬楼梯的问题
 * @author leeqqiang
 */

// 递归
function climbStairs(num) {
  if(num <= 2) return num

  if(climbStairs.mem[num] !== undefined) {
    climbStairs.mem[num] = climbStairs(num - 1) + climbStairs(num - 2)
  }

  return climbStairs.mem[num]
}

climbStairs.mem = {}

// 动态规划
function climbStairs2(num) {
  if(num <=2) return num

  let mem = new Array(10)

  mem[0] = 1
  mem[1] = 2

  for(let i = 2; i < num; i++) {
    mem[i] = mem[i - 1] + mem[i - 2]
  }

  return mem[num - 1]
}

let x = climbStairs(10)
let y = climbStairs2(10)

console.log('x: ', x)
console.log('y: ', y)
