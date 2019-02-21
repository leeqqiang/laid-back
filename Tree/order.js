/**
 * @file 遍历二叉树
 * @author leeqqiang
 */

 // 前序遍历
function preOrder(treeNode) {
  if(!treeNode) return []

  return [treeNode.value].concat(preOrder(treeNode.left)).concat(preOrder(treeNode.right))
}

exports.preOrder = preOrder

// 中序遍历
function inOrder(treeNode) {
  if(!treeNode) return []

  return inOrder(treeNode.left).concat(treeNode.value).concat(inOrder(treeNode.right))
}

exports.inOrder = inOrder

// 后序遍历
function postOrder(treeNode) {
  if(!treeNode) return []

  return postOrder(treeNode.left).concat(postOrder(treeNode.right)).concat(treeNode.value)
}

let tree = {
  value: 1,
  left: {
    value: 2,
    left: {
      value: 4
    },
    right: {
      value: 5
    }
  },
  right: {
    value: 3,
    left: {
      value: 6
    },
    right: {
      value: 7
    }
  }
}

let pre = preOrder(tree)
let inArr = inOrder(tree)
let post = postOrder(tree)

console.log('left: ', pre)
console.log('in: ', inArr)
console.log('post: ', post)
