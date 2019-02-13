/**
 * @file 二分查找
 * @author leeqqiang
 */

// 普通的二分查找
function bsearch(arr, val) {
  let len = arr.length

  if(len === 0 || (len === 1 && arr[0] !== val)) return -1

  let low = 0
  let high = len - 1

  // 终止条件
  while(low <= high) {
    // 取中 防止堆栈溢出
    let mid = Math.ceil(low + (high - low) / 2)

    if(arr[mid] === val) {
      return mid
    }
    else if(arr[mid] < val) {
      low = mid + 1
    }
    else {
      high = mid - 1
    }
  }

  return -1
}

// 基于递归的二分查找
function bsearchR(arr, val) {
  let len = arr.length

  if(len === 0 || (len === 1 && arr[0] !== val)) return -1

  return bsearchRD(arr, 0, len - 1, val)
}

// 递归函数
function bsearchRD(arr, low, high, val) {
  // 终止条件
  if(low > high) return -1

  let mid = Math.floor(low + (high - low) / 2)

  if(arr[mid] === val) {
    return mid
  }
  else if(arr[mid] < val) {
    return bsearchRD(arr, mid + 1, high, val)
  }
  else {
    return bsearchRD(arr, low, mid - 1, val)
  }
}

let arr = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19]
let index = bsearch(arr, 3)
let index2 = bsearchR(arr, 3)

console.log('find index: ', index)
console.log('find idnex: ', index2)
