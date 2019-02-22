/**
 * @file 求二叉树两个节点的最近祖先节点
 * @author leeqqiang
 */

// 普通二叉树求最近祖先
function lowestCommonAncestor(treeNode, p, q) {
  if(!treeNode || treeNode.value === p || treeNode.value === q) return treeNode

  let leftNode = lowestCommonAncestor(treeNode.left, p, q)
  let rightNode = lowestCommonAncestor(treeNode.right, p, q)

  return leftNode === undefined ? rightNode : rightNode === undefined ? leftNode : treeNode
}

// 二叉搜索树求最近祖先
function lowestCommonAncestorBST(treeNode, p, q) {
  if(treeNode.value > p && treeNode.value > q) {
    return lowestCommonAncestorBST(treeNode.left, p, q)
  }

  if(treeNode.value < p && treeNode.value < q) {
    return lowestCommonAncestorBST(treeNode.right, p, q)
  }

  return treeNode
}

// 二叉搜索树求最近祖先
function lowestCommonAncestorBST2(treeNode, p, q) {
  while(treeNode) {
    if(treeNode.value > p && treeNode.value > q) {
      treeNode = treeNode.left
    }
    else if(treeNode.value < p && treeNode.value < q) {
      treeNode = treeNode.right
    }
    else {
      return treeNode
    }
  }
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
let y = lowestCommonAncestorBST(tree, 1, 7)
let z = lowestCommonAncestorBST2(tree, 1, 7)

console.log('x: ', x)
console.log('y: ', y)
console.log('z: ', z)
