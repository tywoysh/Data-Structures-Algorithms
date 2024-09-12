var findBottomLeftValue = function(root) {
    if(root === null) return;
    let queue = [];
    queue.push(root);
    let leftVal;
    while(queue.length > 0) {
        let levelSize = queue.length;

        for (let i = 0; i < levelSize; i++) {
            let node = queue.shift();

            if (i === 0) {
                leftVal = node.val
            }
            if(node.left !== null){
                queue.push(node.left);
            }
            if(node.right !== null) {
                queue.push(node.right);
            }
        }
    }
    return leftVal;
};