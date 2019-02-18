/**
 * @file 请平方根
 * @author leeqqiang
 */

 /**
  * 平方根
  * @param {Number} x 开方数
  */
function sqrt(x) {
  if(x === 0) return 0

  let low = 1
  let high = x

  while(low <= high) {
    let mid = Math.floor(low + (high - low) / 2)
    let product = mid * mid
    let productPlus = (mid + 1) * (mid + 1)

    if(product <= x && productPlus > x) {
      return mid
    }
    else if(product < x) {
      low = mid + 1
    }
    else {
      high = mid - 1
    }
  }
}

/**
 * 带小数的平方根
 * @param {Number} x 开方数
 * @param {*} num 小数位数
 */
function sqrtDecimal(x, num) {
  if(x === 0) return 0

  // 整数
  let integer = sqrt(x)

  if(integer * integer === x) {
    return integer
  }

}

 let y = sqrt(19)
 let z = sqrtDecimal(8, 6)

 console.log('sqrt: ', y)
 console.log('sqrt: ', z)
