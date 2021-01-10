# Tree

```ts
// recursion

function xxxorderTraversal(root: TreeNode | null): number[] {
  function dfs(node: TreeNode | null): Array<TreeNode> {
    if (!node) return [];
    // pre-order
    /// vlr
    return [
      node,
      ...(node?.left ? dfs(node.left) : []),
      ...(node?.right ? dfs(node.right) : []),
    ];
    // in-order
    // rlv
    // return [
    //     ...node?.left ? dfs(node.left) : [],
    //     node,
    //     ...node?.right ? dfs(node.right) : []
    // ]

    // post-order
    // lrv
    // return [
    //     ...node?.left ? dfs(node.left) : [],
    //     ...node?.right ? dfs(node.right) : []
    //     node,
    // ]
  }
  return dfs(root).map((item) => item.val);
}

// iterative
function preorderTraversal(root: TreeNode | null): number[] {
  // vlr
  const result: number[] = [];
  if (root) {
    const stack: TreeNode[] = [root];
    while (stack.length) {
      const node = stack.pop();
      result.push(node.val);

      // pre-order
      if (node.right) {
        stack.push(node.right);
      }
      if (node.left) {
        stack.push(node.left);
      }

      // post-order
      // if (node.left) {
      //   stack.push(node.left)
      // }
      // if (node.right) {
      //   stack.push(node.right)
      // }
    }
  }
  return result;
  // post-order
  // return result.revers()
}

function postorderTraversal(root: TreeNode | null): number[] {
  // lvr
  const result: number[] = [];
  if (root) {
    const stack: TreeNode[] = [root];
    let node: TreeNode | null = root;
    while (stack.length) {
      node = stack.pop() || null;
      result.push(node.val);

      if (node.left) {
        stack.push(node.left);
      }
      if (node.right) {
        stack.push(node.right);
      }
    }
  }
  return result.reverse();
}

function inorderTraversal(root: TreeNode | null): number[] {
  // lvr
  const result: number[] = [];
  if (root) {
    const stack: TreeNode[] = [root];
    let node: TreeNode | null = root;
    while (stack.length) {
      if (node) {
        node = node.left;
        if (node) stack.push(node);
      } else {
        node = stack.pop() || null;
        if (!node) continue;
        result.push(node.val);
        node = node.right;
        if (node) stack.push(node);
      }
    }
  }
  return result;
}
```

```ts
function levelOrder(root: TreeNode | null): number[][] {
  const result: number[][] = [];
  if (root) {
    const queue = [root];
    while (queue.length > 0) {
      const length = queue.length;
      const sameLevel: number[] = [];
      for (let i = 0; i < length; i++) {
        const node = queue.shift();
        if (node) sameLevel.push(node.val);
        if (node?.left) queue.push(node.left);
        if (node?.right) queue.push(node.right);
      }
      result.push(sameLevel);
    }
  }
  return result;
}
```
