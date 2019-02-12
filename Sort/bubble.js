/**
 * @file 冒泡排序
 * @author leeqqiang
 */

const {
  getRandomNumArr
} = require('../Common/random')

function bubble(arr) {
  let len = arr.length

  if(len <= 1) return arr

  for(let i = 0; i < len; i++) {
    // 提前退出标记
    let flag = false

    for(let j = 0; j < len - i - 1; j++) {
      if(arr[j] > arr[j + 1]) {
        let tmp = arr[j]

        arr[j] = arr[j+1]
        arr[j+1] = tmp
        flag = true
      }
    }

    // 当前没有交换 就可以提前退出
    if(!flag) break
  }
}

let arr = getRandomNumArr(10, 100)

console.log('before sort: ', arr)

bubble(arr)

console.log('after sort: ', arr)

