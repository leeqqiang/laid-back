/**
 * @file 广度优先遍历
 * @author leeqqiang
 */

function bfs(treeNode) {
  if(!treeNode) return []

  let queue = [treeNode]
  let result = []

  while(queue.length) {
    let node = queue.shift()

    result.push(node.value)

    node.left && queue.push(node.left)
    node.right && queue.push(node.right)
  }

  return result
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

let x = bfs(tree)

console.log('x: ', x)
