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
  let res

  while(low <= high) {
    let mid = Math.floor(low + (high - low) / 2)
    let mid2 = x / mid

    if(mid2 === mid) {
      return mid
    }
    else if(mid2 < mid) {
      high = mid - 1
    }
    else {
      res = mid
      low = mid + 1
    }
  }

  return res
}

/**
 * 带小数的平方根
 * @param {Number} x 开方数
 * @param {*} num 小数位数
 */
function sqrtDecimal(x) {
  if(x === 0) return 0

  let low = 1
  let high = x
  let res

  while(high - low > 1e-6) {
    let mid = low + (high - low) / 2
    let mid2  = x / mid

    if(mid2 === mid) {
      return mid
    }
    else if(mid2 < mid) {
      high = mid
    }
    else {
      res = mid
      low = mid
    }
  }

  res = Math.round(res * 1e6) / 1e6

  return res
}

 let y = sqrt(19)
 let z = sqrtDecimal(2)

 console.log('sqrt: ', y)
 console.log('sqrt: ', z)
