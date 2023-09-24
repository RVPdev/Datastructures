/**
 * Remove duplicate values, if any, from a sorted linked list.
 *
 * The algorithm should be O(n) time complexity, therefore it cannot use `find()`.
 *
 * @param sortedLinkedList
 *  a possibly empty link list with all values in lexical order.
 *
 * @returns {LinkedList}
 *  the original linked list with any duplicate values removed.
 */

function removeDuplicates(sortedLinkedList) {
  // TODO: implement an algorithm to remove duplicate values from a sorted linked list.

  if (sortedLinkedList.length <= 1) {
    return sortedLinkedList;
  }

  let valueSet  = new Set();
  let listNode = sortedLinkedList.head;

  do {
    let value = listNode.value;

    if(valueSet.has(value)) {
      sortedLinkedList.remove((node, index) => node === listNode)
    } else {
      valueSet.add(value)
    }
    listNode = listNode.next;
  } while(listNode);


  return sortedLinkedList;
}

module.exports = removeDuplicates;
