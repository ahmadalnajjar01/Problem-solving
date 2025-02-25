function deleteMiddle(head) {
  if (!head || !head.next) return null;

  let slow = head,
    fast = head,
    prev = null;
  while (fast && fast.next) {
    prev = slow;
    slow = slow.next;
    fast = fast.next.next;
  }

  prev.next = slow.next;
  return head;
}

let head2 = new ListNode(1);
head2.next = new ListNode(2);
head2.next.next = new ListNode(3);
head2.next.next.next = new ListNode(4);
head2.next.next.next.next = new ListNode(5);

console.log(deleteMiddle(head2));
