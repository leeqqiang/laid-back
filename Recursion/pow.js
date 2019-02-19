/**
 * @file 次幂
 * @author leeqqiang
 */

 /**
  * 求 x 的 n 次幂
  * @param {Number} x 底数
  * @param {Number} n 幂数
  */
function pow(x, n) {
  if(n === 0) return 1
  if(x === 0) return 0
  if(n === 1) return x

  if(n < 0) {
    return 1 / pow(x, -n)
  }

  if(n % 2 === 1) {
    return pow(x, n - 1) * x
  }
  else {
    let tmp = pow(x, n / 2)

    return tmp * tmp
  }
}

let y = pow(2, 3)
let z = pow(2, -3)

console.log('x: ', y)
console.log('x: ', z)
