class ListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function reverseLinkedList(head) {
  let prev = null;
  let current = head;
  while (current) {
    let next = current.next; 
    current.next = prev; 
    prev = current;
    current = next;
  }
  return prev;
}

let head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
head = reverseLinkedList(head);
console.log(head);



