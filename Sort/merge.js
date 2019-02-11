/**
 * @file 归并排序
 * @author liyuqiang
 */

const {
  getRandomNumArr
} = require('../Common/random')

function mergeSort(arr) {
  let len = arr.length

  if(len <= 1) return arr

  mergeSortC(arr, 0, len - 1)
}

function mergeSortC(arr, p, r) {
  if(p >= r) return

  let q = Math.floor((p + r) / 2)

  mergeSortC(arr, p, q)
  mergeSortC(arr, q + 1, r)


}

function merge(arr, p, q, r) {

}

let arr = getRandomNumArr(10, 100)

console.log('before sort: ', arr)

merge(arr)

console.log('after sort: ', arr)
