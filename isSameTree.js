function TreeNode(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
  
var isSameTree = function(p, q) {
    // Both trees null
    if (p === null && q === null) return true;

    // One null, one not
    if (p === null || q === null) return false;

    return (p.val === q.val) && isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};

let p = new TreeNode(1);
p.left = new TreeNode(2);
p.right = new TreeNode(3);

let q = new TreeNode(1);
q.left = new TreeNode(2);
q.right = new TreeNode(3);


console.log(isSameTree(p, q));


