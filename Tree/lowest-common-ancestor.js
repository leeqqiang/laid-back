/**
 * @file 求二叉树两个节点的最近祖先节点
 * @author leeqqiang
 */

 function lowestCommonAncestor(treeNode, p, q) {
  if(!treeNode || treeNode.value === p || treeNode.value === q) return treeNode

  let leftNode = lowestCommonAncestor(treeNode.left, p, q)
  let rightNode = lowestCommonAncestor(treeNode.right, p, q)

  return leftNode === undefined ? rightNode : rightNode === undefined ? leftNode : treeNode
 }


 let tree = {
  value: 10,
  left: {
    value: 6,
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
      value: 8,
      left: {
        value: 7
      },
      right: {
        value: 9
      }
    }
  }
}

let x = lowestCommonAncestor(tree, 1, 7)

console.log('x: ', x)
