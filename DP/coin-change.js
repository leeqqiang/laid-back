/**
 * @file 零钱兑换
 * @author leeqqiang
 */

function coinChange(coins, amount) {
  let dp = new Array(amount + 1).fill(Number.MAX_SAFE_INTEGER)

  dp[0] = 0

  for(let i = 1; i <= amount; i++) {
    for(let j = 0; j < coins.length; j++) {
      if(coins[j] <= i) {
        dp[i] = Math.min(dp[i], dp[i - coins[j]] + 1)
      }
    }
  }

  return dp[amount] > amount ? -1 : dp[amount]
}

let x = coinChange([1, 2, 5], 11)

console.log('x: ', x)
