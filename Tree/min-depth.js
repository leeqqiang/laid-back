/**
 * @file 二叉树最小深度
 * @author leeqqiang
 */

function minDepth(treeNode) {
  if(!treeNode) return 0
  if(!treeNode.left) return 1 + minDepth(treeNode.right)
  if(!treeNode.right) return 1 + minDepth(treeNode.left)

  let minLeftDepth = minDepth(treeNode.left)
  let minRightDepth = minDepth(treeNode.right)

  return 1 + Math.min(minLeftDepth, minRightDepth)

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

let x = minDepth(tree)

console.log('x: ', x)
