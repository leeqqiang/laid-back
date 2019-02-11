/**
 * @file 链表内的相邻元素成对两两翻转
 * @author leeqqiang
 */

 /**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
  if(!head) return null
  if(!head.next) return head

  let root = head.next
  let pre = head
  let cur = head.next
  let prepre
  let nextnext

  while(cur) {
    nextnext = cur.next

    pre.next = null
    cur.next = pre

    prepre = pre

    if (nextnext) {
      pre = nextnext
      cur = nextnext.next

      if(!cur) {
        prepre.next = pre
      }
      else {
        prepre.next = cur
      }
    }
    else {
      cur = null
    }
  }

  return root
}

/* 测试demo */
const testData = {
  val: 1,
  next: {
    val: 2,
    next: {
      val: 3,
      next: {
        val: 4,
        next: null
      }
    }
  }
}

let result = swapPairs(testData)
