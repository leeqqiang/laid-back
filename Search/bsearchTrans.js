/**
 * @file 二分查找的变形
 * @author leeqqiang
 */

// 查找第一个给定值
function bsearchFirst(arr, val) {
  let len = arr.length

  if(len === 0 || (len === 1 && arr[0] !== val)) return -1

  let low = 0
  let high = len - 1
  let index = -1

  while(low <= high) {
    let mid = Math.floor(low + (high - low) / 2)

    if(arr[mid] === val) {
      index = mid
      break
    }
    else if(arr[mid] < val) {
      low = mid + 1
    }
    else {
      high = mid - 1
    }
  }

  if(index > -1) {
    while(arr[--index] === val) {}

    index++
  }

  return index
}

// 查找第一个大于等于给定元素的值
function bsearchFirstGE(arr, val) {
  let len = arr.length

  if(len === 0 || (len === 1 && arr[0] !== val)) return -1

  let low = 0
  let high = len - 1
  let mid

  while(low <= high) {
    mid = Math.floor(low + (high - low) / 2)

    if(arr[mid] === val) {
      break
    }
    else if(arr[mid] < val) {
      low = mid + 1
    }
    else {
      high = mid - 1
    }
  }

  // 有值时返回第一个等于的
  if(arr[mid] === val) {
    while(arr[--mid] === val) {}

    return mid++
  }

  // 值小于时
  if(arr[mid] < val) {
    if(mid < len - 1) {
      return ++mid
    }

    return -1
  }

  // 值大于时
  if(arr[mid] > mid) {
    return --mid
  }
}

let arr = [1, 3, 4, 6, 7, 8, 8, 8, 9, 10]

let indexFirst = bsearchFirst(arr, 8)
let indexFirstGE = bsearchFirstGE(arr, -2)

console.log('bsearchFirst: ', indexFirst)
console.log('indexFirstGE: ', indexFirstGE)
