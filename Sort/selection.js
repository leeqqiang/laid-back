/**
 * @file 选择排序
 * @author leeqqiang
 */

const {
  getRandomNumArr
} = require('../Common/random')

function selection(arr) {
  let len = arr.length

  if(len <= 1) return arr

  for(let i = 0; i < len - 1; i++) {
    let min = i

    for(let j = i + 1; j < len; j++) {
      if(arr[j] < arr[min]) {
        min = j
      }
    }

    let tmp = arr[i]

    arr[i] = arr[min]
    arr[min] = tmp
  }
}

let arr = getRandomNumArr(10, 100)

console.log('before sort: ', arr)

selection(arr)

console.log('after sort: ', arr)
