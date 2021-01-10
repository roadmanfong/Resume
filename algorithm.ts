export class TreeNode {
  val: number
  left: TreeNode | null
  right: TreeNode | null
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? null : val
    this.left = left === undefined ? null : left
    this.right = right === undefined ? null : right
  }
}

export function arrayToBinaryTree(array: number[]): TreeNode {
  const nodes = [null, ...array]
    .map(val => new TreeNode(val))
  for (let i = 1;i < nodes.length;i++) {
    nodes[i].left = nodes[2 * i]
    nodes[i].right = nodes[2 * i + 1]
  }
  return nodes[1]
}

export function showTree(root: TreeNode | null) {
  function dfs(node: TreeNode | null, level: number) {
    if (!node) {
      return
    }
    if (node.val !== null) {
      console.log('-'.repeat(level) + node.val)

    }
    dfs(node.left, level + 1)
    dfs(node.right, level + 1)
  }
  console.log('tree')
  dfs(root, 0)
}


/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {

};

export class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? null : val
    this.next = next === undefined ? null : next
  }
}

export function arrayToList(array: number[]) {
  let header
  let pointer: ListNode | null = null


  for (let i = 0;i < array.length;i++) {
    const item = new ListNode(array[i])


    if (pointer) {
      pointer.next = item
    } else {
      pointer = item
      header = pointer
    }
    pointer = item
  }
  console.log('hello')
  return header
}

export function listToArray(node?: ListNode | null) {
  let pt = node
  const list = []
  while (pt !== null) {
    list.push(pt.val)
    pt = pt.next
  }
  return list
}


// sort
function quickSort(nums: number[]): number[] {
  const len = nums.length
  const pivot = nums[len - 1]
  if (nums.length < 1) {
    return nums
  }
  const left: number[] = []
  const right: number[] = []
  for (let i = 0;i < len - 1;i++) {
    if (nums[i] < pivot) {
      left.push(nums[i])
    } else {
      right.push(nums[i])
    }
  }

  return [...quickSort(left), pivot, ...quickSort(right)]
}


function partition(nums: number[], front: number, end: number) {
  let i = front - 1 // means how many number is great than pivot
  const pivot = nums[end]
  for (let j = front;j < end;j++) {
    if (nums[j] < pivot) {
      i++
      const tmp = nums[j]
      nums[j] = nums[i]
      nums[i] = tmp
    }
  }
  i++
  const tmp = nums[end]
  nums[end] = nums[i]
  nums[i] = tmp
  console.log(nums)
  return tmp
}
