/**
 * @file 验证二叉搜索树
 * @author leeqqiang
 */

const { inOrder, preOrder } = require('./order')

// 先中序遍历再验证
function isValidBST1(treeNode) {
  if(!treeNode) return true

  let arr = inOrder(treeNode)
  let orig = arr.slice()

  arr.sort((a, b) => a - b)

  let val

  while((val = arr.shift()) !== undefined) {
    if(val !== orig.shift()) {
      return false
    }
  }

  return true
  // return orig.join(',') === arr.join(',')
}

// 只存前一个值验证
function isValidBST2(treeNode) {
  // 存前一个的值
  isValidBST2.prev = null

  return helper2_(treeNode)
}

function helper2_(treeNode) {
  if(!treeNode) return true

  if(!helper2_(treeNode.left)) return false

  if(isValidBST2.prev && isValidBST2.prev >= treeNode.value) return false

  isValidBST2.prev = treeNode.value

  return helper2_(treeNode.right)
}

// 递归验证
function isValidBST3(treeNode, min, max) {
  if(!treeNode) return true
  if(min !== undefined && min >= treeNode.value) return false
  if(max !== undefined && max <= treeNode.value) return false

  return isValidBST3(treeNode.left, min, treeNode.value)
          && isValidBST3(treeNode.right, treeNode.value, max)
}

let tree = {
  value: 4,
  left: {
    value: 2,
    left: {
      value: 1
    },
    right: {
      value: 3
    }
  },
  right: {
    value: 6,
    left: {
      value: 5
    },
    right: {
      value: 7
    }
  }
}

let x = isValidBST1(tree)
let y = isValidBST2(tree)
let z = isValidBST3(tree)

console.log('x: ', x)
console.log('y: ', y)
console.log('z: ', z)
