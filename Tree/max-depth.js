/**
 * @file 二叉树最大深度
 * @author leeqqiang
 */

function maxDepth(treeNode) {
  return treeNode ? 1 + Math.max(maxDepth(treeNode.left), maxDepth(treeNode.right)) : 0
}

let tree = {
  value: 4,
  left: {
    value: 2
  },
  right: {
    value: 6,
    left: {
      value: 5,
      left: {
        value: 8
      }
    },
    right: {
      value: 7
    }
  }
}

let x = maxDepth(tree)

console.log('x: ', x)
