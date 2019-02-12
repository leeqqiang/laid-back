/**
 * @file 查找数组内第K大的元素
 * @author leeqqiang
 */

const {
  getRandomNumArr
} = require('../Common/random')

function findK(arr, k) {
  let len = arr.length

  if(len === 0 || k > len) return null

  return findKC(arr, 0, len - 1, k)
}

// 递归函数
function findKC(arr, p, r, k) {
  let q = partition(arr, p, r)

  if(k === q + 1) {
    return arr[q]
  }
  else if(k > q + 1) {
    return findKC(arr, q + 1, r, k)
  }
  else {
    return findKC(arr, p, q - 1, k)
  }
}

// 分区函数
function partition(arr, p, r) {
  let povit = arr[r]
  let i = p

  for(let j = p; j < r; j++) {
    if(arr[j] > povit) {
      swap(arr, i, j)
      i++
    }
  }

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

let k = findK(arr, 4)

console.log('k: ', k)
