var countNodes = function(root) {
    const computeLeftHeight = (node) => {
        let height = 0;
        while (node) {
            height++;
            node = node.left;
        }
        return height;
    };

        const computeRightHeight = (node) => {
        let height = 0;
        while (node) {
            height++;
            node = node.right;
        }
        return height;
    };

    if (!root) {
        return 0;
    }

    let leftHeight = computeLeftHeight(root);
    let rightHeight = computeRightHeight(root);

    if (leftHeight === rightHeight) {
        return(2 ** leftHeight) - 1;
    }

    return 1 + countNodes(root.left) + countNodes(root.right);
};