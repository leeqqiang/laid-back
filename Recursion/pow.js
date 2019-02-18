/**
 * @file 次幂
 * @author leeqqiang
 */

 /**
  * 求 x 的 y 次幂
  * @param {Number} x 底数
  * @param {Number} y 幂数
  */
function pow(x, y) {
  if(y === 0) return 1
  if(x === 0) return 0
  if(y === 1) return x

  if(y < 0) {
    return 1 / pow(x, -y)
  }

  return x * pow(x, y - 1)
}

let y = pow(2, 3)
let z = pow(2, -3)

console.log('x: ', y)
console.log('x: ', z)
