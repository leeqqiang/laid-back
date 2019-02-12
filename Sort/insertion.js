/**
 * @file 插入排序
 * @author leeqqiang
 */

const {
  getRandomNumArr
} = require('../Common/random')

function insertion(arr) {
  let len = arr.length

  if(len <= 1) return arr

  for(let i = 1; i < len; i++) {
    let value = arr[i]
    let j = i - 1

    for(; j >= 0; j--) {
      if(arr[j] > value) {
        // 集体后移一位
        arr[j+1] = arr[j]
      }
      else {
        break
      }
    }

    // 插入数据
    arr[j+1] = value
  }
}

let arr = getRandomNumArr(10, 100)

console.log('before sort: ', arr)

insertion(arr)

console.log('after sort: ', arr)
