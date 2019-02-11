/**
 * @file 链表翻转
 * @author leeqqiang
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
  if(!head) return null

  let pre = head
  let cur = head.next
  let nextnext

  head.next = null

  while(cur) {
    nextnext = cur.next
    cur.next = pre
    pre = cur
    cur = nextnext
  }

  return pre
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
        next: {
          val: 5,
          next: null
        }
      }
    }
  }
}

let result = reverseList(testData)

console.log(result)
