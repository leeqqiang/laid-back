/**
 * @file 快速排序
 * @author liyuqiang
 */

const {
  getRandomNumArr
} = require('../Common/random')

function quick(arr) {
  let len = arr.length

  if(len <= 1) return arr

  quickC(arr, 0, len - 1)
}

// 递归函数
function quickC(arr, p, r) {
  if(p >= r) return

  // 取分区点并根据分区点分区
  let q = partition(arr, p, r)

  quickC(arr, p, q - 1)
  quickC(arr, q + 1, r)
}

// 分区函数
function partition(arr, p, r) {
  // 取最后一个作为分区点
  let pivot = arr[r]
  // 这是一个哨兵 存的是第一个大于分区点的位置
  let i = p

  for(let j = p; j < r; j++) {
    if(arr[j] < pivot) {
      swap(arr, i, j)
      i++
    }
  }

  // 第一个大于分区点的位置和分区点互换
  swap(arr, i, r)

  return i
}

// 交换函数
function swap(arr, i, j) {
  let tmp = arr[i]

  arr[i] = arr[j]
  arr[j] = tmp
}

let arr = getRandomNumArr(10, 100)

console.log('before sort: ', arr)

quick(arr)

console.log('after sort: ', arr)
