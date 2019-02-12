/**
 * @file 归并排序
 * @author leeqqiang
 */

const {
  getRandomNumArr
} = require('../Common/random')

function mergeSort(arr) {
  let len = arr.length

  if(len <= 1) return arr

  mergeSortC(arr, 0, len - 1)
}

// 递归调用函数
function mergeSortC(arr, p, r) {
  if(p >= r) return

  let q = Math.floor((p + r) / 2)

  // 拆分
  mergeSortC(arr, p, q)
  mergeSortC(arr, q + 1, r)

  // 合并
  merge(arr, p, q, r)
}

// 合并函数
function merge(arr, p, q, r) {
  let i = p
  let j = q + 1
  let k = 0

  // 临时数组
  let tmp = new Array(r - p + 1).fill(null)

  while(i <= q && j <= r) {
    if(arr[i] < arr[j]) {
      tmp[k++] = arr[i++]
    }
    else {
      tmp[k++] = arr[j++]
    }
  }

  let start = i
  let end = q

  if(j <= r) {
    start = j
    end = r
  }

  while(start <= end) {
    tmp[k++] = arr[start++]
  }

  // 临时数组的数据拷贝回arr
  for(i = 0; i <= r - p; i++ ) {
    arr[p + i] = tmp[i]
  }
}

let arr = getRandomNumArr(11, 100)

console.log('before sort: ', arr)

mergeSort(arr)

console.log('after sort: ', arr)
