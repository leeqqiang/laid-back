/**
 * @file 深度优先遍历
 * @author leeqqiang
 */

function dfs(treeNode) {
  if(!treeNode) return []

  return [treeNode.value].concat(dfs(treeNode.left)).concat(dfs(treeNode.right))
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

let x = dfs(tree)

console.log('x: ', x)
